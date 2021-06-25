const hero = () => {
  const contactsBtn = document.querySelector('.contacts__btn'),
  overlay = document.querySelector('.overlay');
  
  contactsBtn.addEventListener('click', () => {
    console.log(1);
    overlay.style.visibility = 'visible';
  });

  overlay.addEventListener('click', e => {
    if (e.target.matches('.overlay') ||
        e.target.matches('.close-modal')) {
      overlay.style.visibility = 'hidden';
    }
  });
};

export default hero;