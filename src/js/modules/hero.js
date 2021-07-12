const hero = () => {
  const contactsBtn = document.querySelector('.contacts__btn'),
  overlays = document.querySelectorAll('.overlay'),
  overlayPolicy = document.querySelector('.overlay-policy');
  
  contactsBtn.addEventListener('click', () => {
    overlays[0].style.visibility = 'visible';
  });

  overlays.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.matches('.overlay') ||
          e.target.matches('.close-modal')) {
            item.style.visibility = 'hidden';
      }
  
      if (e.target.matches('.policy-link')) {
        overlayPolicy.style.visibility = 'visible';
      }
    });
  });

  
};

export default hero;