//playsound function
const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  /*here the query selector
    selects the audio elements who 
    have a data key = the keycode
    of the event.*/

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  /*here the query selector
    selects the div elements who 
    have a data key = the keycode
    of the event.*/

  if (!audio) return; //if audio doesn't exist stop the function

  key.classList.add("playing");
  //if audio exists add class "playing" to the key.

  audio.currentTime = 0;
  //rewinding the audio back to the start, so that if we press a key in succession we always get the
  //sound from start, and not after the previous one playing is over.

  audio.play(); // playing the audio, present in the audio tag
};
//---------------------------------------------------------------------------------------------//

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;
  //if any ending transition doesnt include the property name "transform" then dont use function.

  e.target.classList.remove("playing");
  //else from the target div of that event , remove the class "playing"
};
//---------------------------------------------------------------------------------------------//

const keys = Array.from(document.querySelectorAll(".key"));
//select all keys

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
//listen for transitions ending in each of the keys

//---------------------------------------------------------------------------------------------//

window.addEventListener("keydown", playSound);
