---
layout: article
date: 2025-01-12
category: C++
description: What data does a mutex protect?
excerpt: Whatever data you want.
---
**First!**

Juvenile, I know, but aside from this being my first blog entry here, it is also semi relevant to this topic.

The question at the top is one I had when I started to get into concurrent programming in C++.  You use a mutex to protect data, right?  But what data?  I'll get straight to the point and then illustrate with some examples.

What data does a mutex protect?  None.

A mutex protects nothing.  You do, by designing your program to use the mutex.

When a mutex is locked, the thread that initiates the lock has ownership of the lock exclusively.  No other thread can take it until it is unlocked by the owning thread, or ownership is transferred.

So you can do this:

```cpp
std::mutex m;
int a;

int main()
{
    a = 5;
    return 0;
}
```

Or this:

```cpp
int a;
std::mutex m;

int main()
{
    a = 5;
    return 0;
}
```

Or even this:

```cpp
class data_to_protect
{
    std::mutex m;
    int a;
public:
    void set_a(int b) { a = b; }
}

int main()
{
    data_to_protect d;
    d.set_a(5);
    return 0;
}
```

And no one will stop you, unless you run into some nasty undefined behavior by trying to modify the variable from another thread.

Your design is the only thing that actually protects data, not the mutex.  Here's another example:

```cpp
std::mutex m;

class data_to_protect
{
    int a;
public:
    int get_a() { return a; }
    void set_a(int b) { a = b; }
}

void modify_a(data_to_protect& a, int b)
{
    a.set_a(b);
}

int main()
{
    data_to_protect data;
    auto threadA = std::thread(modify_a, std::ref(data), 5);
    auto threadB = std::thread(modify_a, std::ref(data), 10);
    threadA.join();
    threadB.join();
    std::cout << data.get_a();
    return 0;
}
```

What will the value of `data.a` be when it is printed before main returns?  Undefined.  Something may explode.  Who knows.  `data.a` is not protected, and multiple threads are modifying it at the same time.  A very simple change will fix this.  If we lock the mutex in the `set_a` function, we can prevent any race conditions when modifying the `a` member variable.

```cpp
std::mutex m;

class data_to_protect
{
    int a;
public:
    int get_a() { return a; }
    void set_a(int b) {
        m.lock();
        a = b;
        m.unlock();
    }
}

void modify_a(data_to_protect& a, int b)
{
    a.set_a(b);
}

int main()
{
    data_to_protect data;
    auto threadA = std::thread(modify_a, std::ref(data), 5);
    auto threadB = std::thread(modify_a, std::ref(data), 10);
    threadA.join();
    threadB.join();
    std::cout << data.get_a();
    return 0;
}
```

Even though the mutex is a global, we can still use it to protect the data inside our class.

Just remember, your design is what protects the data, not the mutex.  The mutex is just a tool to help you, but **you** have to use it correctly.
