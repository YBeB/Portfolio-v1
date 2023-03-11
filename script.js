
const navbarLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
      section.classList.add('active');
      navbarLinks[index].parentElement.classList.add('active');
    } else {
      section.classList.remove('active');
      navbarLinks[index].parentElement.classList.remove('active');
    }
  });
});