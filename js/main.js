const outputEl = document.getElementById("output");
const inputEl  = document.getElementById("input");

// Handle Enter key
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = this.value.trim();
    this.value = "";

    if (!cmd) {
      // Case 1: Just Enter → add new prompt
      addPrompt();
      return;
    }

    // Case 2: Valid command
    // Print only the result (no prefix)
    processCommand(cmd);
  }
});

// Add a new prompt line with blinking cursor
function addPrompt() {
  const line = document.createElement("div");

  const pref = document.createElement("span");
  pref.className = "prompt";
  pref.textContent = "engineer@anubhav_kumar $ ";

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  line.appendChild(pref);
  line.appendChild(cursor);

  outputEl.appendChild(line);

  // Scroll to bottom
  outputEl.scrollTop = outputEl.scrollHeight;
}

// Print output WITHOUT prefix
function printOutput(text, { isHTML = false } = {}) {
  const line = document.createElement("div");
  line.className = "response";

  if (isHTML) {
    line.innerHTML = text;
  } else {
    line.textContent = text;
  }

  outputEl.appendChild(line);
  outputEl.scrollTop = outputEl.scrollHeight;
}
