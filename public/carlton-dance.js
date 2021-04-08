/* Pure CSS The Carlton dance by Grzegorz Witczak */
/* https://codepen.io/Wujek_Greg/pen/EpJwaj */

// Pure CSS dance animation (no graphics included)

// Designed by Gustavo Viselner
// https://dribbble.com/shots/3979515-It-s-not-unusual

// Thanks for Una Kravets for Sass Pixel Art technique
// https://una.im/sass-pixel-art/

// Making time ~ 7 hours

// Some Js for audio toggle

const music = document.getElementById('music')
let isPlaying = false
music.volume = 0.2
function togglePlay () {
  if (isPlaying) {
    music.pause()
  } else {
    music.play()
  }
}
music.onplaying = function () {
  isPlaying = true
  document.getElementById('music-animation').classList.add('on')
}
music.onpause = function () {
  isPlaying = false
  document.getElementById('music-animation').classList.remove('on')
}

const button = document.getElementById('toggle')
const text_music_on = 'Music on'
const text_music_off = 'Music off'
button.addEventListener(
  'click',
  function () {
    if (isPlaying) {
      button.innerHTML = text_music_on
    } else {
      button.innerHTML = text_music_off
    }
  },
  false
)
