
const commands = {
    help: "Available commands: about, experience, education, skills, projects, awards, publications, contact, download",
    about: "Anubhav Kumar is a passionate SoC Design & Verification Engineer based in Munich.",
    experience: "Infineon, Adva Network Security, Rohde & Schwarz, Honeywell.",
    education: "BSc from Amrita Vishwa Vidyapeetham, MSc from TUM.",
    skills: "C, C++, Verilog, SystemVerilog, UVM, Git, AXI, APB, ARM, FPGA.",
    projects: "TRNG verification, AXI/APB testbench, Mobile access control, TLS WebSocket alarms.",
    awards: "ASIP Hackathon, TUM Science Hackathon, Deutschlandstipendium.",
    publications: "IEEE D2D comm, TRNG security, TSN attacks.",
    contact: "kanubhav690@gmail.com | Munich, Germany | +49 15758747791",
    download: "Download my resume here: <a href='resume.pdf' target='_blank'>Anubhav Kumar Resume</a>"
};

function processCommand(cmd) {
    const response = commands[cmd.toLowerCase()] || "Command not recognized. Type 'help' for a list of commands.";
    printOutput(response);
}
