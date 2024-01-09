let htmlDc = document.querySelector("#main");
htmlDc.addEventListener("scroll", (e) => {
  let countScroll = e.target.scrollTop;
  if (countScroll > 100) {
    document.getElementsByClassName("headerNav__sama")[0].style.top = 0;
    document.getElementsByClassName("headerNav__sama")[0].style.position =
      "fixed";
    document.getElementsByClassName("toTop")[0].style.opacity = 1;
  } else {
    document.getElementsByClassName("headerNav__sama")[0].style.top = "3%";
    document.getElementsByClassName("headerNav__sama")[0].style.position =
      "";
    document.getElementsByClassName("toTop")[0].style.opacity = 0;
  }
});

document
  .getElementsByClassName("toTop")[0]
  .addEventListener("click", () => {
    htmlDc.scrollTop = 0;
  });

// coded by amo mohsen




if ("serviceWorker" in navigator) { 
navigator.serviceWorker
   .register("serviceWorker.js") 
  .then(reg => {
     console.log("Service worker registred successfully", reg);
   })
   .catch(err => {
     console.log("service worker not registred !!", err);
   }); 
}
