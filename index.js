const closeIcon = document.getElementById('close-icon');
const menuIcon = document.getElementById('menu-icon');
const desktopMenu = document.getElementById('mobile-menu');
function setVersion(size) {
  if (size.matches) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'flex';
    desktopMenu.style.display = 'flex';
    closeIcon.addEventListener('click', () => {
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      desktopMenu.style.display = 'none';
    });
    document.getElementById('partners-menu-item').addEventListener('click', () => {
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      desktopMenu.style.display = 'none';
    });
    document.getElementById('contact-menu-item').addEventListener('click', () => {
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      desktopMenu.style.display = 'none';
    });
    document.getElementById('footer-menu-item').addEventListener('click', () => {
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      desktopMenu.style.display = 'none';
    });
  }
}
menuIcon.addEventListener('click', () => {
  const size = window.matchMedia('(max-width: 768px)');
  setVersion(size);
});

const topDevelopers = [
  {
    profileImage: './images/person1.jpg',
    name: 'MOMANYI HASSAN',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileImage: './images/person2.jpg',
    name: 'DANIEL KIMURA',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileImage: './images/person3.jpg',
    name: 'KIMURA DANIEL',
    subDesc: 'Back End Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileImage: './images/person4.jpg',
    name: 'PETER KEMBOI',
    subDesc: 'Front End Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileImage: './images/person5.jpg',
    name: 'NANCY KIMURA',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileImage: './images/person6.jpg',
    name: 'ANDREW KEN',
    subDesc: 'Mobile App Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
];

const topArea = document.getElementById('top-area');
topDevelopers.forEach((developerInfo) => {
  const card = `
  <div class="card">
  <div class="card-body">
    <img src="${developerInfo.profileImage}" alt="">
    <div class="post-desc">
      <h3>${developerInfo.name}</h3>
      <p>${developerInfo.subDesc}</p>
      <hr>
      <h5>${developerInfo.fullDesc}</h5>
    </div>
  </div>
</div>`;
  topArea.innerHTML += card;
});
const btnMore = document.getElementById('btn-more');
const developer = Array.from(document.querySelectorAll('.top-area .card'));
developer.forEach((card, i) => {
  if (i > 1) {
    card.classList.add('hide');
  }
});

const handleMoreBtn = (developer) => {
  if (developer.classList.contains('hide')) {
    btnMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    btnMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
};

btnMore.addEventListener('click', () => {
  developer.forEach((developer, i) => {
    if (i > 1) {
      developer.classList.toggle('hide');
      handleMoreBtn(developer);
    }
  });
});