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
			<tr><td>clear</td><td>Clear the window</td></tr>
			
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
build, and contribute to systems that are not just functional but secure, efficient, and resilient.`,

    experience: `
<b>Ericsson</b> – ASIC Design Verification Engineer (Aug 2025 – Present, Stockholm)<br>
- Working on advanced ASIC/SoC design verification in telecom domain.<br><br>

<b>Adva Network Security GmbH</b> – Master Thesis (Jul 2024 – Mar 2025, Munich)<br>
- Conducted hardware security evaluation of a True Random Number Generator (TRNG) on ARM architecture.<br>
- Executed power & electromagnetic side-channel attacks.<br>
- Performed compliance with NIST SP 800-90, FIPS & German Common Criteria.<br><br>

<b>Technical University of Munich</b> – Teaching Assistant (Oct 2024 – Feb 2025, Apr 2024 – Jul 2024)<br>
- Assisted in VHDL System Design Lab, guiding students from simple HDL components to implementing the IDEA encryption algorithm.<br><br>

<b>Research Internship</b> – TUM (Oct 2023 – Apr 2024)<br>
- Analyzed security attacks on Time Sensitive Networking (TSN) standards using OMNET++ and INET framework.<br>
- Modeled realistic topologies, including NASA Orion satellite networks.<br><br>

<b>Infineon Technologies</b> – Working Student (Jun 2023 – Jun 2024, Munich)<br>
- Automated verification data extraction and visualization using Python.<br>
- Upgraded testcase generator GUI to improve requirements handling.<br><br>

<b>Rohde & Schwarz</b> – Working Student (Nov 2022 – Apr 2023, Munich)<br>
- Defined data structures for SW dependencies.<br>
- Built visualization tools and automated config generation.<br><br>

<b>Honeywell Technology Solutions</b> – Embedded Engineer II (Oct 2021 – Oct 2022, Bengaluru)<br>
- Reduced build server dependency by 90% (Windows Subsystem for Linux).<br>
- Automated XML file generation (300x faster).<br>
- Cybersecurity advocate for Intrusion Systems.<br><br>

<b>Honeywell Technology Solutions</b> – Embedded Engineer I (Aug 2019 – Sep 2021, Bengaluru)<br>
- Developed secure intrusion & access control systems.<br><br>

<b>Internships (2016 – 2019)</b><br>
- IISc Bangalore – Lip region extraction for video-based biometric research.<br>
- Mistral Solutions – Designed analog/digital filters, DC-DC converters.<br>
- DRDO (GTRE) – Control system analysis of rotational mechanical system.<br>
- Module143 – IoT projects with Arduino & Raspberry Pi.<br>
`,

    education: `
<b>Technical University of Munich</b> – Master of Science in Communications Engineering (2022 – 2025)<br>
<b>Amrita Vishwa Vidyapeetham</b> – Bachelor of Technology in ECE (2015 – 2019)<br>
<b>Kendriya Vidyalaya MEG & Centre</b> – High School Diploma (2014 – 2015)<br>
`,

    skills: `
<b>Verification:</b> UVM, SystemVerilog, Verilog<br>
<b>Languages:</b> C, C++, Python<br>
<b>Protocols:</b> AXI, APB, UART, I2C, SPI<br>
<b>Architectures:</b> ARM, FPGA, RISC-V<br>
<b>Tools:</b> Git, Gerrit, Perforce<br>
<b>Languages:</b> Hindi (Native), English (Full Professional), German (Limited), Swedish (Elementary)<br>
`,

    projects: `
- <b>TRNG Verification on ARM SoC</b> – UVM-based verification, side-channel security evaluation.<br>
- <b>TSN Security Attacks</b> – Modeled and analyzed TSN vulnerabilities (TUM research internship).<br>
- <b>Mobile TLS Access Control</b> – Developed secure mobile app for door access (Honeywell).<br>
- <b>Dependency Analysis Tool</b> – Visualized SW dependencies at Rohde & Schwarz.<br>
- <b>IoT Projects</b> – Arduino/Raspberry Pi solutions during internships.<br>
`,

    awards: `
- BRAVO Award – Bronze (Honeywell)<br>
- Six Sigma Green Belt Certified<br>
- Crash Course on Python – Coursera<br>
- Python (Basic) – HackerRank<br>
- TUM Deutschlandstipendium (2022–2023)<br>
- Science Hackathon – 2nd Place (TUM, 2023)<br>
`,

    publications: `
- <b>Distance and Energy Aware Device-to-Device Communication</b> – IEEE, 2019<br>
- <b>Challenges and Possibilities for Sustainable Income Generation in Odisha</b><br>
- <b>Security Attacks on Time-Sensitive Networking</b> – TUM Research, 2024<br>
- <b>Analysis of Weaknesses in TRNGs</b> – 2025<br>
`,

    contact: `
📧 Email: kanubhav690@gmail.com<br>
🔗 LinkedIn: <a href="https://www.linkedin.com/in/anubhav-kumar1998" target="_blank">linkedin.com/in/anubhav-kumar1998</a><br>
🌍 Portfolio: <a href="https://kanubhav.github.io/portfolio/" target="_blank">kanubhav.github.io/portfolio</a><br>
📍 Location: Munich, Bavaria, Germany<br>
`,

    download: `Download my resume here: <a href='resume.pdf' target='_blank'>Anubhav Kumar Resume</a>`,
	
	clear: ``  // handled specially in main.js
};


function processCommand(cmd) {
  const key = cmd.toLowerCase();
  if (key === "clear") {
    outputEl.innerHTML = startupScreen; // reset screen
    return;
  }
  if (commands[key]) {
    // HTML for 'help' or anything that contains markup
    const isHTML = key === "help" || key === "download";
    printOutput(commands[key], { isHTML, withPrompt: true, type: false });
  } else {
    printOutput("Command not recognized. Type \"help\" for a list of commands.", { withPrompt: true });
  }
}
