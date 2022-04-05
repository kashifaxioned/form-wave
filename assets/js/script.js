let formGroups = document.querySelectorAll(".form-group")

// add wave functionality on all elements

formGroups.forEach((formGroup) => {
  formGroup.addEventListener("click", ()=> {
    removeWave()
    let label = formGroup.firstElementChild
    let spans = label.children
    console.log(spans)
    for(let i = 0; i < spans.length; i++){
      spans[i].classList.add("addWave")
      spans[i].style.transitionDelay = (i * 50) + "ms"
    }
  })
})

// remove wave functionality on all elements

function removeWave() {
  formGroups.forEach(formGroup => {
    let label = formGroup.firstElementChild
    let spans = label.children
    for(let i = 0; i < spans.length; i++){
      spans[i].style,transitionDelay = "0"
      spans[i].classList.remove("addWave")
    }
  })
}