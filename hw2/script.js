let treeClicked;

window.addEventListener('load', () => {
    const treeLottie = document.getElementById('treeLottie').dotLottie;
    const treeWrapper = document.getElementById('treeLottie').parentElement;
    treeLottie.resize();

    document.addEventListener('click', async () => {
        if (treeLottie && !treeClicked) {
            treeClicked = true;
            treeLottie.play();
            
            
            treeWrapper.classList.add('tree-open');
            changetoMainColor();
            await wait(700);
            treeWrapper.classList.add('tree-move');
            
        }
    }); 
});

function changetoMainColor(){
    document.getElementById("MainBody").classList.add("MainBodyChanged")
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Vignette controls: show/hide with a "close-in" effect
const vignetteEl = document.getElementById('vignette');
const vignetteToggle = document.getElementById('vignetteToggle');

function showVignette(autoCloseMs = 0){
    if(!vignetteEl) return;
    vignetteEl.classList.add('vignette--active');
    vignetteEl.classList.remove('vignette--closed');
    // after a short delay, tighten the vignette for the "closing in" effect
    setTimeout(()=> vignetteEl.classList.add('vignette--closed'), 300);
    if(autoCloseMs > 0) setTimeout(hideVignette, autoCloseMs);
}

function hideVignette(){
    if(!vignetteEl) return;
    vignetteEl.classList.remove('vignette--closed');
    // allow the "opening" animation to run, then fade out
    setTimeout(()=> vignetteEl.classList.remove('vignette--active'), 250);
}

if(vignetteToggle){
    vignetteToggle.addEventListener('click', ()=>{
        if(!vignetteEl) return;
        if(vignetteEl.classList.contains('vignette--active')) hideVignette();
        else showVignette();
    });
}

// expose helpers for debugging/demo
window.showVignette = showVignette;
window.hideVignette = hideVignette;

