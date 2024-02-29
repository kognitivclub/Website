// changing navbar on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// FAQ script show/hide answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-angle-down'){
            icon.className = "uil uil-angle-up";
        }
        else{
            icon.className = "uil uil-angle-down";
        }
    })
})

// show/hide nav menu when it is in smaller screens
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);


// Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue=0;
    let endValue= parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})

// GOBACK FUnction
function goBack(){
    window.history.back();
}

// SEARCH-BAR FOR BLOG
const searchBlog = () =>{
    const searchBox = document.getElementById("blogSearch").value.toUpperCase();
    const storeblogs = document.getElementById("blog__search");
    const blog = document.querySelectorAll(".blog");
    const bname = storeblogs.getElementsByTagName("h4");

    for(var i=0;i<bname.length;i++){
        let match = blog[i].getElementsByTagName('h4')[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchBox)>-1){
                blog[i].style.display="";
           }
           else{
                blog[i].style.display="none";
           }
        }
    }
}
