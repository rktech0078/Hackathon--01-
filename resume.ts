alert("Welcome to my resume generator! Please fill out the form below to generate your resume.");

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLElement;
const shareableLink = document.getElementById('shareable-link') as HTMLElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;

  // Generate resume content dynamically
  resumeOutput.innerHTML = `
    <section class="personal-info">
      <h1 class="name editable" contenteditable="true">${name}</h1>
      <p class="contact-details editable" contenteditable="true">Email: ${email}</p>
    </section>

    <section class="education">
      <h2 class="editable" contenteditable="true">Education</h2>
      <p class="editable" contenteditable="true">${education}</p>
    </section>

    <section class="skills">
      <h2 class="editable" contenteditable="true">Skills</h2>
      <ul class="skills-list">${skills.map(skill => `<li class="editable" contenteditable="true">${skill.trim()}</li>`).join('')}</ul>
    </section>

    <section class="work-experience">
      <h2 class="editable" contenteditable="true">Work Experience</h2>
      <p class="editable" contenteditable="true">${workExperience}</p>
    </section>
  `;

  resumeOutput.style.display = 'block';

  // Generate unique shareable link
  const username = name.toLowerCase().replace(/\s+/g, ''); // Create username from name
  const uniqueUrl = `https://${username}.vercel.app/resume`;
  shareableLink.innerHTML = `<a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
  shareableLinkContainer.style.display = 'block';

  // PDF download logic
  downloadPdfButton.addEventListener('click', () => {
    generatePdf(name, email, education, skills, workExperience);
  });
});

// Function to generate the PDF
function generatePdf(name: string, email: string, education: string, skills: string[], workExperience: string) {
  const pdfContent = `
    Name: ${name}
    Email: ${email}
    Education: ${education}
    Skills: ${skills.join(', ')}
    Work Experience: ${workExperience}
  `;

  const pdfWindow = window.open('', '_blank');
  pdfWindow?.document.write(`<pre>${pdfContent}</pre>`);
  pdfWindow?.print();
}
