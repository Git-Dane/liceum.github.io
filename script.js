const sliderImages = document.querySelectorAll('.slider img');

let currentImage = 0;

setInterval(() => {
	sliderImages[currentImage].style.display = 'none';
	currentImage = (currentImage + 1) % sliderImages.length;
	sliderImages[currentImage].style.display = 'block';
}, 3000);
