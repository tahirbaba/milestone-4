// Get references to the form and resume display elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// // Check if elements are correctly fetched
// if (!resumeForm || !resumeDisplay) {
//     console.error("Form or display area not found.");
// }

// Add event listener to the form
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Extract input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const cell = (document.getElementById('cell') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate HTML for the resume
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
        <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
        <p><strong>Cell:</strong><span contenteditable="true"> ${cell}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Inject the HTML into the display area
    if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHTML;
}else{
    console.error(`Some missing`);
}

    // Make sure the display area is visible
    resumeDisplay.style.display = resumeHTML
});




// // Get references to form and resume display elements
// const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// // Event listener to handle form submission
// resumeForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent page reload

//     // Extract input values
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const cell = (document.getElementById('cell') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

//     // Generate HTML for the resume
//     const resumeHTML = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Cell:</strong> ${cell}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//     `;

//     // Display the generated resume
//     resumeDisplay.innerHTML = resumeHTML;
//     resumeDisplay.style.display = 'block';
// });
