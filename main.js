alert("Welcome to our static rusume");
var toggleButton1 = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills-section');
toggleButton1.addEventListener('click', function () {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleButton1.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.classList.add('hidden');
        toggleButton1.textContent = 'Show Skills Section';
    }
});
