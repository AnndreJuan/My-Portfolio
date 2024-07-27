document.querySelectorAll('.hero_events_link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.hero_events_link').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});

const heroLinks = document.querySelector('.hero_links');
const hero_events = document.querySelector('.hero_events');
const hero_info = document.querySelector('.hero_info');

function desativateScroll () {
    if (window.scrollY > 120) {
        heroLinks.style.display = 'none';
    } else {
        heroLinks.style.display = 'Flex';
    };

    if (window.scrollY > 160) {
        hero_events.style.display = 'none';
    } else {
        hero_events.style.display = 'Flex';
    };

    if (window.scrollY > 200) {
        hero_info.style.display = 'none';
    } else {
        hero_info.style.display = 'Flex';
    };
};

window.addEventListener('scroll', desativateScroll);