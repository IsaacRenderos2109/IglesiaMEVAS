function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

/*Carrusel*/
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        document.querySelector(".carousel-images").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Cambia de imagen cada 5 segundos
    setInterval(showNextImage, 5000);
});
