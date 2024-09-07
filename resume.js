alert("Welcome to my resume generator! Please fill out the form below to generate your resume.");
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    resumeOutput.innerHTML = "\n    <section class=\"personal-info\">\n      <h1 class=\"name\">".concat(name, "</h1>\n      <p class=\"contact-details\">Email: ").concat(email, "</p>\n    </section>\n\n    <section class=\"education\">\n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n    </section>\n\n    <section class=\"skills\">\n      <h2>Skills</h2>\n      <ul class=\"skills-list\">").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    </section>\n\n    <section class=\"work-experience\">\n      <h2>Work Experience</h2>\n      <p>").concat(workExperience, "</p>\n    </section>\n  ");
    resumeOutput.style.display = 'block';
});
