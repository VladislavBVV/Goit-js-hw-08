import throttle from "lodash.throttle";

import Player from "@vimeo/player";

const LOCAL_STORAGE_KEY = "videoplayer-current-time";


 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
console.log(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    console.log(localStorage)

    localStorage.setItem(LOCAL_STORAGE_KEY, seconds)
}
currentTime()
function currentTime() {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));
};


