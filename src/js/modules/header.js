import logo from '../../img/header/logo.jpg'

const header = () => {
  const dayNight = document.getElementById('toggle--daynight');

  dayNight.addEventListener('click', (e) => {
    e.target.checked ?
      document.body.style.backgroundColor = '#ff0' :
      document.body.style.backgroundColor = '#000'
    
  })

  
}

export default header;
