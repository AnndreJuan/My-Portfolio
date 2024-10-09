document.querySelectorAll('.hero_events_link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.hero_events_link').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});

function activateLinkOnScroll() {
    const sections = [
        { id: 'container_about', linkId: 'link_about' },
        { id: 'container_projects', linkId: 'link_experience' },
        { id: 'container_experiences', linkId: 'link_projects' }
    ];

    let currentSection = '';

    sections.forEach(section => {
        const element = document.getElementById(section.id);
        const rect = element.getBoundingClientRect();
    
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {currentSection = section.linkId;}
    });
    document.querySelectorAll('.hero_events_link').forEach(link => {link.classList.remove('active');});
    if (currentSection) {
        document.getElementById(currentSection).classList.add('active');
    }
}

window.addEventListener('scroll', activateLinkOnScroll);

