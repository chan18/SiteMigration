 // grab everything we need
 const btn = document.querySelector(".mobile-menu-button");
 const sidebar = document.querySelector(".sidebar");

 // add our event listener for the click
 btn.addEventListener("click", () => {
     sidebar.classList.toggle("my-8");
     sidebar.classList.toggle("-translate-y-full");
 });