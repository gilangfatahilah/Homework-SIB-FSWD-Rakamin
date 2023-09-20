//script ini digunakan untuk memberikan logika terhadap navbar website ketika berada di lebar halaman kurang sama dengan dari 1080 pixel

//toggle class active
const navbarNav = document.querySelector(".navbar-list");
//apabila di klik tombol menu maka sidebar akan menghilang
document.querySelector("#bars").onclick = () => {
  navbarNav.classList.toggle("active");
};

//apabila di klik diluar sidebar maka sidebar akan menghilang
const hamburger = document.querySelector("#bars");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
