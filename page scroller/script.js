let el = document.querySelector(".scroller")
let height = +document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll",()=>{
    const scrollTop = document.documentElement.scrollTop
    el.style.width =`${(scrollTop / height) * 100}%`;
})