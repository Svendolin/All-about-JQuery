

document.querySelectorAll('.point').forEach( point => {
  point.addEventListener('click', function(e){
    document.querySelectorAll('.point').forEach(item => {
      item.classList.remove('active')
    })
    this.classList.toggle('active')
  })
})