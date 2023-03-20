let onLode = document.querySelector(".loder");

function lode() {
  onLode.classList.add("none")
}

setTimeout(() => {
  onLode.remove()
}, 3600)


// -------------------
let closee = document.querySelector(".close");
let navMenu = document.querySelector(".ulheader");
let hamburger = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("open");
});

closee.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

document.querySelectorAll(".aheader").forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
// -------------------



let tabs = document.querySelectorAll(".tabs li");
let ArreyTabs = Array.from(tabs);
let article = document.querySelectorAll(".tabs-content article");
let ArreyArticle = Array.from(article);

tabs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        tabs.forEach((ele) => {
            ele.classList.remove("actiivve")
        });
        e.currentTarget.classList.add("actiivve");

        ArreyArticle.forEach((article) => {
            article.style.display = "none";
        })

        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";

    })
})


let colortabsa = document.querySelectorAll(".tabs li a");


colortabsa.forEach((eae) => {
    eae.addEventListener("click", (e) => {
        colortabsa.forEach((eae) => {
            eae.classList.remove("coloractive")

        });

        eae.classList.add("coloractive")


    });
});


let upto = document.querySelector(".upto");

window.onscroll = () => {
  if (scrollY >= 400) {
    upto.classList.add("show");
  } else {
    upto.classList.remove("show");
  }
};

upto.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});