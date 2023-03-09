const pics = document.querySelectorAll('.pic')
pics.forEach(pic => {
  pic.addEventListener('click',() => {
    removeActiveClasses()
    pic.classList.add('active')
  })
  
})

function removeActiveClasses() {
  pics.forEach(pic => {
      pic.classList.remove('active')
  })}