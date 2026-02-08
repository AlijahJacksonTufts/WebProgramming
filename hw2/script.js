let treeClicked = true

window.addEventListener('load', () => {
    const treeLottie = document.getElementById('treeLottie').dotLottie;
    const treeWrapper = document.getElementById('treeLottie').parentElement;

    document.addEventListener('click', async () => {
        if (treeLottie && treeClicked) {
            treeLottie.play();
            treeClicked = false;

            treeWrapper.classList.add('tree-zoom');
            await wait(300);
            treeWrapper.classList.add('tree-move');
        }
    }); 
});

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

