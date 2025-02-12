document
    .querySelectorAll(".language-cpp .highlight pre.highlight code")
    .forEach((codeBlock) => {
        let lines = codeBlock.innerHTML.split("\n");
        let processedLines = lines
            .slice(0, -1)
            .map(
                (line, lineIndex) =>
                    `<span class="line-color"><span class="line-number">${
                        lineIndex + 1
                    }</span> ${line}</span>`
            );

        let lastLine = lines[lines.length - 1];
        if (lastLine.trim() !== "") {
            processedLines.push(
                `<span class="line-number">${
                    processedLines.length + 1
                }</span> ${lastLine}`
            );
        } else {
            processedLines.push(lastLine);
        }

        codeBlock.innerHTML = processedLines.join("\n");
    });
