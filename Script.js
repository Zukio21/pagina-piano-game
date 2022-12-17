const pianoKeys = document.querySelectorAll(".piano-keys .Key");

let allKey = [],
audio = new Audio("Audio/a.wav");

const playTune =(key) =>{
    audio.src=`Audio/${key}.wav`;
    audio.play();
    console.log(allKey);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150);

}


pianoKeys.forEach(key => {
    allKey.push(key.dataset.key);
    // call playTune function with passing data-key value as an argument
    key.addEventListener("click",() => playTune (key.dataset.key)) ;
    
});



const pressedKey = (e) =>{
    if (allKey.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown", pressedKey);
