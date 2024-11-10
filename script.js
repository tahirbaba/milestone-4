// Get references to the form and resume display elements
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// // Check if elements are correctly fetched
// if (!resumeForm || !resumeDisplay) {
//     console.error("Form or display area not found.");
// }
// Add event listener to the form
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Extract input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cell = document.getElementById('cell').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate HTML for the resume
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <p><strong>Name:</strong><span contenteditable=\"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><strong>Cell:</strong><span contenteditable=\"true\"> ").concat(cell, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Inject the HTML into the display area
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Some missing");
    }
    // Make sure the display area is visible
    resumeDisplay.style.display = resumeHTML;
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
