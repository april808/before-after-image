// BEFORE AFTER FUNCTION

// function beforeAfter() {
//   var x = document.getElementById("before_after");
//   var xbar = document.getElementById("before_after_slider");
//     x.style.width =
//     xbar.value + "%";
// }

// function beforeAfter() {
//   const beforeImg = document.querySelector('.before_after');
//   const slider = document.querySelector('.before_after_slider');
//   beforeImg.style.width =
//   slider.value + "%";
// }

// const beforeAfter = (id) => {
//   let beforeImg = document.getElementById('beforeImg');
//   let slider = document.getElementById(id);
//   beforeImg.style.width =
//   slider.value + "%";
// }
console.clear()
const beforeAfter = (sliderID,bfImgID) => {
  let beforeImg = document.querySelector(bfImgID);
  let slider = document.getElementById(sliderID);
  // let slider = document.getElementById(event.srcElement.id);
  beforeImg.style.width =
  slider.value + "%";
  // alert(beforeImg);
}
// let beforeImg = document.querySelector("#beforeImg").id;
// console.log(beforeImg)