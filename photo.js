const gallery = document.getElementById("gallery");
const images = gallery.querySelectorAll("img");

let loaded = 0;
const showAfter = Math.max(5, images.length * 0.3);
// 최소 5장 또는 전체의 30%

images.forEach(img => {
    const temp = new Image();
    temp.src = img.src;

    temp.onload = () => {
        loaded++;

        if (loaded >= showAfter) {
            document.getElementById("loading").style.display = "none";
            gallery.style.display = "grid";
        }
    }
});

lightGallery(gallery, {
    speed: 300,
    download: true,
    zoom: true
});