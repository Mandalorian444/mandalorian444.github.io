console.log('imgcmp.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    const wipeContainers = document.querySelectorAll('.image-wipe-container');

    const precision = 1000;
    const precisionDivisor = precision / 100;
    
    wipeContainers.forEach(container => {
        // Create and append handle
        const handle = document.createElement('div');
        handle.className = 'wipe-handle';
        container.appendChild(handle);
        console.log('handle created');
        
        const imageB = container.querySelector('img[wipeimg="2"]');
        let isDragging = false;
        let startX, startLeft;
        
        function updateClipPath(percentage) {
            percentage = Math.max(0, Math.min(100, percentage));
            imageB.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            handle.style.left = `${percentage}%`;
        }
        
        function handleMove(clientX) {
            if (!isDragging) return;
            
            const rect = container.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            
            updateClipPath(percentage);
        }

        handle.addEventListener('mouseover', (e) => {
            if (isDragging) {
                handle.classList.remove('hover');
            }
            else {
                handle.classList.add('hover');
            }
        })
        handle.addEventListener('mouseout', (e) => {
            handle.classList.remove('hover');
        })

        // Mouse events
        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            handle.classList.add('dragging');
            
            // Prevent image dragging while dragging handle
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            handleMove(e.clientX);
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            handle.classList.remove('dragging');
        });

        // Touch events
        handle.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            handle.classList.add('dragging');
        });

        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                e.preventDefault();
                handleMove(e.touches[0].clientX);
            }
        }, { passive: false });

        document.addEventListener('touchend', () => {
            isDragging = false;
            handle.classList.remove('dragging');
        });

        // Initial setup
        updateClipPath(50);
    });
});
