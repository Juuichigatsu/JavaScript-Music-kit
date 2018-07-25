 document.addEventListener("DOMContentLoaded", function (event) {
     window.addEventListener("keydown", function (e) {
         var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
         var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
         if (!audio) return; //stop the function from running all together
         audio.currentTime = 0; //rewind to the start           
         audio.play(); //call function to play  
         key.classList.add("playing");
     });

     function removeTransition(e) {
         if (e.propertyName !== 'transform') return;
         this.classList.remove('playing');
     }
     const keys = Array.from(document.querySelectorAll('.key')); //ARRAY  with all
     keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //every key get added EL which is transEnd,when end remove
 });