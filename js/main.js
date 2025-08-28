const outputEl = document.getElementById("output");
const inputEl  = document.getElementById("input");

let commandHistory = [];
let historyIndex = -1;

// Handle Enter key + Arrow keys
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = this.value.trim();

    if (cmd) {
      // Save command to history
      commandHistory.push(cmd);
      historyIndex = commandHistory.length;
    }

    this.value = ""; // clear input box

    if (!cmd) {
      // Case 1: Just Enter → add new prompt
      addPrompt();
      return;
    }

    // Case 2: Valid command
    // 1) Echo the prompt + typed command
    echoCommand(cmd);

    // 2) Process command and print result
    processCommand(cmd);
  }

  // Navigate command history
  else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      this.value = commandHistory[historyIndex];
    }
    e.preventDefault(); // prevent cursor jump
  }
  else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      this.value = ""; // clear if at end
    }
    e.preventDefault();
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
function printOutput(text) {
  const line = document.createElement("div");
  line.className = "response";

  line.innerHTML = text;   // Always HTML

  outputEl.appendChild(line);
  outputEl.scrollTop = outputEl.scrollHeight;
}
