// window.addEventListener("DOMContentLoaded", () => {
//     const body = document.querySelector('body');
//     let textNodes = [];
//     function recursy (element) {
//         element.childNodes.forEach(node => {
//             if (node.nodeName.match(/^H\d/)) {
//                 textNodes.push(node.textContent);
//             } else if (node.nodeName.match(/^P/)) {
//                 textNodes.push(node.textContent);
//             } else if (node.nodeName.match(/^DIV/) && node.childElementCount == 0) {
//                 textNodes.push(node.textContent);
//             } else if (node.nodeName.match(/^SPAN/)) {
//                 textNodes.push(node.textContent);
//             } else {
//                 recursy(node);
//             }
//         })
//     }
//     recursy(body);
// })


//  const input = document.querySelector(".nav__input"),
//  inputStyle = input.style,
//  form = document.querySelector(".nav__form"),
//  formStyle = form.style,
//  buttonForm = document.querySelector(".nav__button"),
//  btnStyle = buttonForm.style,
//  navItem = document.querySelector(".nav__itemLink"),
//  navStyle = navItem.style,
//  option = document.querySelector(".nav__optionLink"),
//  optionStyle = option.style;
//
// input.addEventListener("click", function() {
// formStyle.borderBottomColor = "#000";
// btnStyle.opacity = "1";
// })
//
// buttonForm.addEventListener("click", function () {
//     nav__button.style.setProperty("--gray3", color);
//
// })
//
// navItem.addEventListener("click", function () {
//     navStyle.opacity = "0.3";
// })
//
// option.addEventListener("click", function () {
//     optionStyle.opacity = "0.3";
// })



/*
activeSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove('.active');
    }
    for (title of slideTitle) {
        title.classList.remove('.active');
    }
    slides[n].classList.add('.active');
}

activeSlide = (n) => {
    for (title of slideTitle) {
        title.classList.remove('.active');
    }
    slideTitle[n].classList.add('.active');

}

activeDot = (n) => {
    for(dot of dots) {
        dot.classList.remove ('.active');
    }
    dot.classList.add ('.active');
}

dotClick = (index) => {
    if(index == dots.length - 1) {
        index = 0;
        activeDot(index);
        console.log(334);
    } else {
        index += 1;
        activeDot(index);
        console.log(334);

    }
}

dots[0].addEventListener("click", dotClick);
*/






const btnService1 = document.querySelector(".BtnService1"),
      btnService2 = document.querySelector(".BtnService2"),
      btnService3 = document.querySelector(".BtnService3");

let   titlesService = document.querySelector(".services__title"),
      imgService = document.querySelector(".services__img"),
      descService = document.querySelector(".services__description");

const textService = descService.innerText
      // imgServiceStyle = imgService.style;
// active = (index) => {
//     if (btnServiceArray[index] == 0) {
//         titlesServiceArray[0].innerText = "Доставка";
//     }
//     if (btnServiceArray[index] === 1) {
//         titlesServiceArray[1].title = "Гарантия";
//     }
//     if (btnServiceArray[index] == 2) {
//         titlesServiceArray[1].title = "Кредит";
//     }
// }


btnService1.addEventListener("click", function() {


    titlesService.innerText = "Доставка";
    descService.innerText = textService;
    imgService.src = "./src/static/icons/delivery.svg";
});

btnService2.addEventListener("click", function() {
    titlesService.innerText = "Гарантия";
    descService.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    imgService.src = "./src/static/icons/vGlass.svg";
});

btnService3.addEventListener("click", function() {
    titlesService.innerText = "Кредит";
    descService.innerText = "Замещающий тект касательно кредита";
    imgService.src = "./src/static/icons/hyrocopter.svg";
});


var mySwiper = new Swiper('.swiper-container', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



// const slidesTitle = document.querySelectorAll('.productItem__description'),
//     slides = document.querySelectorAll('.product__contentImg'),
//     dots = document.querySelectorAll('.dot');
//
// let index = 0;
//
// active = (n) => {
//     for (dot of dots) {
//         dots.classList[n].remove('.active');
//     }
//     dots[n].classList.add ('.active');
//
//     for(slideTitle of slidesTitle) {
//         slidesTitle[n].classList.remove ('.active');
//     }
//     slidesTitle[n].classList.add ('.active');
//
//     for(slide of slides) {
//         slides[n]
//     }
// }
//
// activeDot = (index) => {
//     if (index == dots.length - 1) {
//         active(index);
//         index = 0;
//     } else {
//         active(index);
//         index += 1;
//     }
// }
//
//

