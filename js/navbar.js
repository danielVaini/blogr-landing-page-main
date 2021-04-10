const dropdown = document.querySelectorAll('.dropdown');
const dropmenu = document.querySelectorAll('.drop-menu');
const iconArrow = document.querySelectorAll('.icon-arrow'); 

dropdown.forEach(item => {
  item.addEventListener('click', () => {
    if(dropdown[0] === item) {
      if(dropmenu[0].style.display === 'none'){
        dropmenu[0].style.display = 'flex'
        dropmenu[1].style.display = 'none'
        dropmenu[2].style.display = 'none'
        // Animation img
        iconArrow[0].classList.add('rotate')
        iconArrow[1].classList.remove('rotate')
        iconArrow[2].classList.remove('rotate')
        
      }else {
        dropmenu[0].style.display = 'none'
        iconArrow[0].classList.remove('rotate')
          
          
        }
      }
      if(dropdown[1] === item) {
        if(dropmenu[1].style.display === 'none'){
          dropmenu[1].style.display = 'flex'
          dropmenu[0].style.display = 'none'
          dropmenu[2].style.display = 'none'
           // Animation img
        iconArrow[0].classList.remove('rotate')
        iconArrow[2].classList.remove('rotate')
        iconArrow[1].classList.add('rotate')
      }else {
        dropmenu[1].style.display = 'none'
        iconArrow[1].classList.remove('rotate')
        
      }
    }
    if(dropdown[2] === item) {
      if(dropmenu[2].style.display === 'none'){
        dropmenu[2].style.display = 'flex'
        dropmenu[0].style.display = 'none'
        dropmenu[1].style.display = 'none'
        
        iconArrow[0].classList.remove('rotate')
        iconArrow[1].classList.remove('rotate')
        iconArrow[2].classList.add('rotate')
      }else {
        dropmenu[2].style.display = 'none'
        iconArrow[2].classList.remove('rotate')
          
        }
      }
    })
  })
  

  // Mobile menu

  const btnsDrop = document.querySelectorAll('.btn-mobile-drop');
  const dropDiv = document.querySelectorAll('.mobile-drop')

  btnsDrop.forEach(item => {
    item.addEventListener('click', () => {
     if(btnsDrop[0] === item){
       if(dropDiv[0].style.display == 'none'){
         dropDiv[0].style.display = 'flex';
         dropDiv[1].style.display = 'none';
         dropDiv[2].style.display = 'none';
        }else {
          dropDiv[0].style.display = 'none';

      }
    }
      
      if(btnsDrop[1] === item){
        if(dropDiv[1].style.display == 'none'){

          dropDiv[0].style.display = 'none';
          dropDiv[1].style.display = 'flex';
          dropDiv[2].style.display = 'none';
        }else {
          dropDiv[1].style.display = 'none';
          
        }
      }
      if(btnsDrop[2] === item){
        if(dropDiv[2].style.display == 'none'){

          dropDiv[0].style.display = 'none';
          dropDiv[1].style.display = 'none';
          dropDiv[2].style.display = 'flex';
        }else {
          dropDiv[2].style.display = 'none';
          
        }
      }
    })
  })

  const btnDropMenu = document.querySelector('.btn-mobile');
  const layoutMenuMobile = document.querySelector('.menu-mobile');
  btnDropMenu.addEventListener('click', () => {
    if(layoutMenuMobile.style.display == 'none'){
      layoutMenuMobile.style.display = 'flex';
      layoutMenuMobile.style.opacity = '1'
    }else {
      layoutMenuMobile.style.display = 'none';
      layoutMenuMobile.style.opacity = '0'

    }
  })