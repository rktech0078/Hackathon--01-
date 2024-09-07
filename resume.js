alert("Welcome to my resume generator! Please fill out the form below to generate your resume.");
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    // Generate resume content dynamically
    resumeOutput.innerHTML = "\n    <section class=\"personal-info\">\n      <h1 class=\"name editable\" contenteditable=\"true\">".concat(name, "</h1>\n      <p class=\"contact-details editable\" contenteditable=\"true\">Email: ").concat(email, "</p>\n    </section>\n\n    <section class=\"education\">\n      <h2 class=\"editable\" contenteditable=\"true\">Education</h2>\n      <p class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n    </section>\n\n    <section class=\"skills\">\n      <h2 class=\"editable\" contenteditable=\"true\">Skills</h2>\n      <ul class=\"skills-list\">").concat(skills.map(function (skill) { return "<li class=\"editable\" contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    </section>\n\n    <section class=\"work-experience\">\n      <h2 class=\"editable\" contenteditable=\"true\">Work Experience</h2>\n      <p class=\"editable\" contenteditable=\"true\">").concat(workExperience, "</p>\n    </section>\n  ");
    resumeOutput.style.display = 'block';
    // Generate unique shareable link
    var username = name.toLowerCase().replace(/\s+/g, ''); // Create username from name
    var uniqueUrl = "https://".concat(username, ".vercel.app/resume");
    shareableLink.innerHTML = "<a href=\"".concat(uniqueUrl, "\" target=\"_blank\">").concat(uniqueUrl, "</a>");
    shareableLinkContainer.style.display = 'block';
    // PDF download logic
    downloadPdfButton.addEventListener('click', function () {
        generatePdf(name, email, education, skills, workExperience);
    });
});
// Function to generate the PDF
function generatePdf(name, email, education, skills, workExperience) {
    var pdfContent = "\n    Name: ".concat(name, "\n    Email: ").concat(email, "\n    Education: ").concat(education, "\n    Skills: ").concat(skills.join(', '), "\n    Work Experience: ").concat(workExperience, "\n  ");
    var pdfWindow = window.open('', '_blank');
    pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write("<pre>".concat(pdfContent, "</pre>"));
    pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.print();
}
