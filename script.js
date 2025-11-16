const icon = document.getElementById("icon");
const closeBtn = document.getElementById("close");
const menu = document.getElementById("menu");

icon.onclick = () => {
  menu.style.display = "flex";
};
                
closeBtn.onclick = () => {
  menu.style.display = "none";
};