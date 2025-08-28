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

    /// Case 2: Valid command
    // 1) Echo the prompt + typed command
    echoCommand(cmd);

    // 2) Process command and print result
    processCommand(cmd);
  }
});

// Echo the command with prompt (like real Linux terminal)
function echoCommand(cmd) {
  const line = document.createElement("div");

  const pref = document.createElement("span");
  pref.className = "prompt";
  pref.textContent = "engineer@anubhav_kumar:~$ ";

  const typed = document.createElement("span");
  typed.className = "cmd";
  typed.textContent = cmd;

  line.appendChild(pref);
  line.appendChild(typed);
  outputEl.appendChild(line);

  // Auto scroll
  outputEl.scrollTop = outputEl.scrollHeight;
}

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
