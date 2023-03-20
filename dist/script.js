console.clear()

const valueA = document.querySelector("#valueA")

document.addEventListener("input", (event) => {
  
  let this_slider = event.target
  let checkSlider = this_slider.classList.contains('before_after_slider')
  
  let afterSlider = document.getElementsByClassName('before_after_slider');
  let beforeImg = document.getElementsByClassName('before_after');
  
  if(checkSlider){
    for(var i=0;i<beforeImg.length;i++){
      if(afterSlider[i] == this_slider){
        beforeImg[i].style.width = this_slider.value + "%";
      }
    }
    valueA.textContent = this_slider.value
  }

  // console.log(checkSlider)
  console.log(event.target.id);
  // console.log(beforeImg_div.style)
})