const button = document.querySelector('.ripple-btn')

button.addEventListener('click', (event)=>{
  const top = event.offsetY+ "px"
  const left = event.offsetX+ "px"

  const ripple = document.createElement("span")
  ripple.style.top = top
  ripple.style.left = left
  ripple.className = "ripple"
  button.appendChild(ripple)
  
  setTimeout(()=>{
    ripple.remove()
  },600)
}, false)