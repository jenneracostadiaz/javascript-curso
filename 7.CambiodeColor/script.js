const Togglemenu = () => {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
  const navigation = document.querySelector('.navigation');
  navigation.classList.toggle('active');
}
const ImgSlider = (param) =>{
    document.getElementById("slider").src=param;
}
