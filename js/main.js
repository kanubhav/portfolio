
document.getElementById("input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const input = this.value.trim();
        this.value = "";
        processCommand(input);
    }
});

function printOutput(text, isHTML = false) {
    const output = document.getElementById("output");
    let index = 0;
    const line = document.createElement("div");
    const prefix = document.createElement("span");
    prefix.textContent = "anubhav_kumar:-$ ";
    line.appendChild(prefix);
    const content = document.createElement("span");
    line.appendChild(content);
    output.appendChild(line);

    if (isHTML) {
        content.innerHTML = text;
    } else {
        const typeEffect = () => {
            if (index < text.length) {
                content.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 10);
            }
        };
        typeEffect();
    }
}

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
