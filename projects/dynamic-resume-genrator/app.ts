document.getElementById('generate-resume-btn')?.addEventListener('click', generateResume);
function generateResume() {

    // Name and Description
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;
    document.getElementById('resume-name')!.innerText = name;
    document.getElementById('resume-description')!.innerText = description;

    // Contact Info
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    document.getElementById('resume-email')!.innerText = email;
    // document.getElementById('resume-email')!.href = `mailto:${email}`;
    document.getElementById('resume-phone')!.innerText = phone;
    document.getElementById('resume-linkedin')!.innerText = linkedin;
    // document.getElementById('resume-linkedin')!.href = linkedin;
    document.getElementById('resume-github')!.innerText = github;
    // document.getElementById('resume-github')!.href = github;

    // Education
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    document.getElementById('resume-education')!.innerText = education;

    // Experience
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    document.getElementById('resume-experience')!.innerText = experience;

    // Projects
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    document.getElementById('resume-projects')!.innerText = projects;

    // Skills
    const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;
    const skills = skillsInput.split(',').map(skill => skill.trim());
    const skillsContainer = document.getElementById('resume-skills')!;
    skillsContainer.innerHTML = ''; // Clear previous skills
    skills.forEach(skill => {
        const skillChip = document.createElement('div');
        skillChip.className = 'skill-chip';
        skillChip.innerText = skill;
        skillsContainer.appendChild(skillChip);
    });

    // Languages
    const languagesInput = (document.getElementById('languages') as HTMLInputElement).value;
    const languages = languagesInput.split(',').map(language => language.trim());
    const languagesContainer = document.getElementById('resume-languages')!;
    languagesContainer.innerHTML = ''; // Clear previous languages
    languages.forEach(language => {
        const languageElement = document.createElement('p');
        languageElement.innerText = language;
        languagesContainer.appendChild(languageElement);
    });
}