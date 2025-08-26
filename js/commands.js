
const commands = {
    help: `
        <table border="1" cellspacing="0" cellpadding="5">
            <tr><th>Command</th><th>Description</th></tr>
            <tr><td>about</td><td>Learn more about me</td></tr>
            <tr><td>experience</td><td>My work experience</td></tr>
            <tr><td>education</td><td>My academic background</td></tr>
            <tr><td>skills</td><td>Tools, languages & expertise</td></tr>
            <tr><td>projects</td><td>Highlighted technical projects</td></tr>
            <tr><td>awards</td><td>Awards and recognitions</td></tr>
            <tr><td>publications</td><td>Research papers & publications</td></tr>
            <tr><td>contact</td><td>My contact details</td></tr>
            <tr><td>download</td><td>Download my resume</td></tr>
        </table>
    `,
    about: `From debugging embedded systems at Honeywell to verifying True Random Number Generators on an Arm SoC, 
my journey has been driven by a passion for secure and reliable hardware.

With over 4 years of full-time and student experience in embedded systems, SoC design verification, and hardware 
security, I’ve developed strong skills in SystemVerilog, UVM, AXI/APB protocols, and security validation techniques.

Currently wrapping up my master’s at TUM, I’ve complemented theory with hands-on work at Infineon, Adva, and 
Rohde & Schwarz—writing testbenches, building verification frameworks, and even conducting side-channel injection 
attacks to evaluate robustness.

I enjoy solving complex problems at the intersection of hardware and security, and I’m always looking to learn, 
build, and contribute to systems that are not just functional but secure, efficient, and resilient.

Let’s connect if you’re working on or hiring for cutting-edge ASIC/SoC verification or secure hardware projects.`,
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
  const key = cmd.toLowerCase();
  if (commands[key]) {
    // HTML for 'help' or anything that contains markup
    const isHTML = key === "help" || key === "download";
    printOutput(commands[key], { isHTML, withPrompt: true, type: false });
  } else {
    printOutput("Command not recognized. Type \"help\" for a list of commands.", { withPrompt: true });
  }
}
