// عداد الارقام
let nums = document.querySelectorAll(".stats .container .box .number");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true;
    }
};

function  startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval( () => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


// Click Logo
let logo = document.querySelector(".logo");

logo.onclick = function () {
    open("https://drive.google.com/file/d/1ptXlwoG3Fo2_slTlWuhoEjPEnKM-NKgs/view?usp=sharing", "","");
}

// Click الراوابط أخري
let abdoAli = document.querySelector(".abdo-ali");
let megaMenu = document.querySelector(".mega-menu");

abdoAli.onclick = function () {
    megaMenu.style.cssText = "opacity: 1";
}


let but = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 1000) {
        but.style.display = "block";
    } else {
        but.style.display = "none";
    }
}

but.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};  