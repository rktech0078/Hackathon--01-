alert("Welcome to my static resume!")

const toggleButton1 = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

toggleButton1.addEventListener('click', () => {
  if (skillsSection.classList.contains('hidden')) {
    skillsSection.classList.remove('hidden');
    toggleButton1.textContent = 'Hide Skills Section';
  } else {
    skillsSection.classList.add('hidden');
    toggleButton1.textContent = 'Show Skills Section';
  }
});


