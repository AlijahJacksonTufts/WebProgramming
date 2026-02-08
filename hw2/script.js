console.log('Script loaded successfully.');

window.addEventListener('load', () => {
    const lottieElement = document.getElementById('myLottie');
    document.addEventListener('click', () => {
        if (lottieElement) {
            lottieElement.play();
        }
    }, { once: true }); 
});