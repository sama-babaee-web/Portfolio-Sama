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




document.addEventListener('DOMContentLoaded', function () {
  const birthDate = new Date(2002, 1, 1); // Month is 0-indexed, so February is 1
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('dynamicAge').textContent = age;
});


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
