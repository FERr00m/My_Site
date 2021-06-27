const header = () => {
  const dayNight = document.getElementById('toggle--daynight');

  //elements for toggle light/dark theme
  const arr = [];
  const header = document.querySelector('.header'),
    hero = document.querySelector('.hero'),
    heroWrap = hero.querySelector('.hero-wrap'),
    contacts = heroWrap.querySelector('.contacts');

  arr.push(document.body);
  arr.push(header);
  arr.push(hero);
  arr.push(heroWrap);
  arr.push(contacts);
    

  
  dayNight.addEventListener('click', (e) => {
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
