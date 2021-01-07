window.onload = () => {
    document.querySelector(".loader").style.display = "none";
    const images = document.querySelectorAll(".img ._img");
    function clickHandler() {
      let src = this.src;
      document.querySelector(".big-img img").src = src;
    }
    images.forEach((image) => {
      image.addEventListener("click", clickHandler);
    });
  };