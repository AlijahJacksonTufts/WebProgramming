let treeClicked;

window.addEventListener('load', () => {
    const treeLottie = document.getElementById('treeLottie').dotLottie;
    treeLottie.resize();

    document.addEventListener('click', async () => {
        if (treeLottie && !treeClicked) {
            treeClicked = true;
            treeLottie.play();
        }
    }); 
    

    treeLottie.addEventListener('complete', async () => {
        flipCard();
    });

});

function changetoMainColor(){
    document.getElementById("MainBody").classList.add("MainBodyChanged")
}

function flipCard() {
    const card = document.querySelector('.flip-card');
    card.classList.toggle('is-flipped');
}   

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

