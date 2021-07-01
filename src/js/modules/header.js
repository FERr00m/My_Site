const header = () => {
  const dayNight = document.getElementById('toggle--daynight');

  //elements for toggle light/dark theme
  const arr = [];

  //hero section
  const header = document.querySelector('.header'),
    hero = document.querySelector('.hero'),
    heroWrap = hero.querySelector('.hero-wrap'),
    contacts = heroWrap.querySelector('.contacts'),
    myPhoto = hero.querySelector('.my-photo'),
    socials = heroWrap.querySelector('.socials'),
  //portfolio section
    portfolio = document.getElementById('portfolio'),
    slider = portfolio.querySelector('.slider'),
    mainSlide = portfolio.querySelector('.main-slide'),
  //popupForm
    modal = document.querySelector('.modal');


  //hero =>
  arr.push(document.body);
  arr.push(header);
  arr.push(hero);
  arr.push(heroWrap);
  arr.push(contacts);
  arr.push(myPhoto);
  arr.push(socials);
  //portfolio =>
  arr.push(portfolio);
  arr.push(slider);
  arr.push(mainSlide);
  //popupForm =>
  arr.push(modal);

  
  dayNight.addEventListener('click', e => {
    e.target.checked ?
    arr.forEach(item => {
      item.classList.add('light-theme')
    }) :
    arr.forEach(item => {
      item.classList.remove('light-theme')
    });
    
  })

  
}

export default header;
