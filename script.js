const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [], 

audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed
    audio.play();//playing audio
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked Key element
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}


pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adding datakey value to allKeys array
    key.addEventListener("click", () => playTune(key.dataset.key)); // calling playTube function w/ passing data-key value as an argument
    console.log(key.dataset.key);
});


//volume variables
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

//hidekeys variables
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide")); // toggling hide class from each key on the checkbox click
}

//press key board to playtune
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key); //if pressed key is in the allKeys array, ony call the playTune function
}


keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);