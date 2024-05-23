const searchForm = document.querySelector(".search-form");
console.log(searchForm)
const searchBtn = document.querySelector("#search-btn");
console.log(searchBtn)


searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn)  &&
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }

    });
});
const cartItem=document.querySelector(".cart-items-container");
console.log(cartItem)
const cartBtn=document.querySelector("#cart-btn");
console.log(cartBtn)

cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }

    });
});





const navbar=document.querySelector(".navbar");
console.log(navbar)
const menuBtn=document.querySelector("#menu-btn");
console.log(menuBtn)

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        
        if (
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }

    });
});


/*const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});*/