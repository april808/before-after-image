console.clear()
// const value = document.querySelector("#value")
// const input = document.querySelector("#pi_input")
// value.textContent = input.value
// input.addEventListener("input", (event) => {
//   value.textContent = event.target.value
//   console.log(event.target);
// })


const valueA = document.querySelector("#valueA")

document.addEventListener("input", (event) => {
  
  let this_slider = event.target
  let checkSlider = this_slider.classList.contains('before_after_slider')
  
  let afterSlider = document.getElementsByClassName('before_after_slider');
  let beforeImg = document.getElementsByClassName('before_after');
  // let beforeImg_div = document.querySelector('.before_after');
  
  console.log(beforeImg,"img")
  console.log(afterSlider,"range")
  
  if(checkSlider){
    for(var i=0;i<beforeImg.length;i++){
      if(afterSlider[i].id == this_slider.id){
        beforeImg[i].style.width = this_slider.value + "%";
      }
    }
    valueA.textContent = this_slider.value
  }

  // console.log(checkSlider)
  // console.log(event.target.id);
  // console.log(beforeImg_div.style)
})


// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// https://zwh.zone/javascript-getelementsbyclassname--e5-8f-96-e5-be-97-e5-b0-8d-e6-87-89-e7-9a-84-class--e7-89-a9-e4-bb-b6-e9-80-b2-e8-a1-8c-e6-93-8d-e4-bd-9c/