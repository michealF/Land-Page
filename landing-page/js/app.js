//Declare The Man Variables In My Project

const fragment = document.createDocumentFragment();
const ul = document.getElementById("navbar__list");
const section = document.querySelectorAll("section");
const allLinks = document.querySelectorAll(".navbar__menu a");

// Create The Links In The Nav Bar

section.forEach(element => {

    let listItem = document.createElement("li"),
        link = document.createElement("a"),
        linkAttr = document.createAttribute("data-section"),
        linkAttrTwo = document.createAttribute("href"),
        linkTxt = document.createTextNode(element.dataset.nav);
    
    linkAttr.value = "#" + element.id;
    linkAttrTwo.value = "#" + element.id;

    link.setAttributeNode(linkAttrTwo);
    link.setAttributeNode(linkAttr);
    link.appendChild(linkTxt);
    listItem.appendChild(link);
    fragment.appendChild(listItem);
})

ul.appendChild(fragment);

// Create A function To Go The Section When Clicked On The Name It In The Nav Bar

allLinks.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: "smooth" });
    });
});

//Add Active Class For The First Link

const First = document.querySelector(".navbar__menu li a");

First.classList.add("active")

//Toggle To Open and Close Settings Box

document.querySelector(".toggle-box .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}
//Settings Box Options
const mainColor = localStorage.getItem("color_option");
const colorList = document.querySelectorAll(".colors-list li");

if (mainColor !== null) {

    document.documentElement.style.setProperty("--main-color", mainColor);

    document.querySelectorAll(".colors-list li").forEach(elem => {

        elem.classList.remove("active");

        if (mainColor === elem.dataset.color) {
            elem.classList.add("active");
        }
    });
}

colorList.forEach(li => {
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        localStorage.setItem("color_option", e.target.dataset.color);
    });
});

//Add Function To Add and Remove Active Class From The Links In The Nav Bar

allLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        ul.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});


//Add Window.onscroll Function To Handle The Navigate In The Page

const sections = document.querySelectorAll('section');
let scroll1 = window.pageYOffset;

window.onscroll = function ()  {
    sections.forEach(section => {
        let offT = section.offsetTop,
            offH = section.offsetHeight,
            winH = window.innerHeight,
            scrT = window.pageYOffset;


        if (scrT >= offT - offH * .25 && scrT < offT + offH - offH * .25) {

            document.querySelectorAll('section').forEach(cl => {
                cl.classList.remove("your-active-class");


            })
            section.classList.add("your-active-class");

            //Add and Remove Active Classe When Scrolling
            let idVal = section.attributes.id.value;
            removeAllCls();
            addActiveCls(idVal);

        }

    });

    //Creation Function To Hide The Nav Bar When Scrolling

    let scroll2 = window.pageYOffset;

    if (scroll1 > scroll2) {
        document.querySelector('.navbar__menu').style.top = "0";
    } else {
        document.querySelector('.navbar__menu').style.top = "-200px";
    }
    scroll1 = scroll2;

    { scrollFunction() };

};

//Functionallity For Add And Remove Class Active When Scrolling

let removeAllCls = function () {
    document.querySelectorAll("nav a").forEach(el => {
        el.classList.remove("active");
    });
};

let addActiveCls = function (id) {
    let select = `nav a[href="#${id}"]`;
    document.querySelector(select).classList.add("active");
}

mybutton = document.getElementById("myButton");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Function To Handle The Nave Bar In The Small Devices

let toggleBtn = document.querySelector('.toggle-menu');

toggleBtn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("menu-active");
    ul.classList.toggle("open");
}

document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== ul) {

        if (ul.classList.contains("open")) {
            toggleBtn.classList.toggle("menu-active");
            ul.classList.toggle("open");
        }
    }

});

ul.onclick = function (e) {
    e.stopPropagation();
}


