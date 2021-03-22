const dropdown = document.querySelectorAll('.dropdown');
const dropmenu = document.querySelectorAll('.drop-menu');

dropdown.forEach(item => {
  item.addEventListener('click', () => {
    if(dropdown[0] === item) {
      if(dropmenu[0].style.display === 'none'){
        dropmenu[0].style.display = 'flex'
        dropmenu[1].style.display = 'none'
        dropmenu[2].style.display = 'none'
      }else {
        dropmenu[0].style.display = 'none'

      }
    }
    if(dropdown[1] === item) {
      if(dropmenu[1].style.display === 'none'){
        dropmenu[1].style.display = 'flex'
        dropmenu[0].style.display = 'none'
        dropmenu[2].style.display = 'none'
      }else {
        dropmenu[1].style.display = 'none'

      }
    }
    if(dropdown[2] === item) {
      if(dropmenu[2].style.display === 'none'){
        dropmenu[2].style.display = 'flex'
        dropmenu[0].style.display = 'none'
        dropmenu[1].style.display = 'none'
      }else {
        dropmenu[2].style.display = 'none'

      }
    }
  })
})