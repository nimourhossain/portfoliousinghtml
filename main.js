const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a[data-section]');

function clearActive() {
  navLinks.forEach(link => link.classList.remove('active'));
}

function showSection(id) {
  sections.forEach(section => {
    section.style.display = section.id === id ? 'block' : 'none';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    showSection(sectionId);
    clearActive();
    link.classList.add('active');
  });
});

showSection('about');

const nameElement = document.querySelector('.intro-text h1');
const nameText = "Mohammad Nimour Hossain";
let index = 0;

function typeName() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 150);
  } else {
    setTimeout(() => {
      nameElement.textContent = "";
      index = 0;
      typeName();
    }, 1500);
  }
}

nameElement.textContent = "";
typeName();

function showTime() {
  const clock = document.querySelector('.clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

let clockEl = document.querySelector('.clock');
if (!clockEl) {
  clockEl = document.createElement('div');
  clockEl.className = 'clock';
  clockEl.style.position = 'fixed';
  clockEl.style.bottom = '10px';
  clockEl.style.right = '10px';
  clockEl.style.background = 'rgba(0, 0, 0, 0.3)';
  clockEl.style.color = 'white';
  clockEl.style.padding = '5px 10px';
  clockEl.style.borderRadius = '5px';
  clockEl.style.fontFamily = 'monospace';
  clockEl.style.fontSize = '16px';
  document.body.appendChild(clockEl);
}


setInterval(showTime, 1000);
showTime();

const seeMoreBtn = document.getElementById('see-more-btn');
const moreText = document.getElementById('more-text');

if (seeMoreBtn && moreText) {
  seeMoreBtn.addEventListener('click', () => {
    const isHidden = moreText.style.display === 'none';
    moreText.style.display = isHidden ? 'inline' : 'none';
    seeMoreBtn.textContent = isHidden ? 'See Less' : 'See More';
  });
}
