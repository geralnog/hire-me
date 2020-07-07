let songs = []
let currentSong = 0

const tittle = document.querySelector('h1')
const input = document.querySelector('input')
const label = document.querySelector('label')
const prev = document.querySelector('#prev')
const play = document.querySelector('#play')
const next = document.querySelector('#next')
const player = document.querySelector('audio')

player.volume = 0.4;

input.onchange = getSongs
next.onclick = nextSong
prev.onclick = prevSong

function getSongs(event) {
    songs = event.target.files;
    playSong()
    label.innerText = songs[currentSong].name.slice(0, -4);
    tittle.innerText = "You're listening to...";
}

function playSong() {
    let song = URL.createObjectURL(songs[currentSong]);
    label.innerText = songs[currentSong].name.slice(0, -4);
    player.setAttribute('src', song);
    player.play();
    play.innerText = '⏸';
    play.onclick = pause;
}

function pause() {
    play.innerText='▶'
    player.pause()
    play.onclick = playCurrent;
}

function playCurrent() {
    play.innerText='⏸'
    player.play()
    play.onclick = pause;
}

function nextSong (){
    if(currentSong + 1 < songs.length){
        currentSong++;
    playSong()
    }
}

function prevSong (){
    if(currentSong - 1 >= 0){
        currentSong--;
    playSong()
    }
}