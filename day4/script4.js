const search=document.querySelector(".search");
const text=document.querySelector(".Search1");
const button=document.querySelector(".button");
button.addEventListener("click",() =>{
  search.classList.toggle("active")
  text.focus();
})