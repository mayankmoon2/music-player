console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kallo Ajay hooda", filePath: "songs/1.mp3", coverPath: "covers1.jpg " },
    { songName: "Husn  ", filePath: "songs/2.mp3", coverPath: "covers2.jpg " },
    { songName: "Maharani ", filePath: "songs/3.mp3", coverPath: "covers3.jpg " },
    { songName: "Believe chai toast ", filePath: "songs/4.mp3", coverPath: "covers4.jpg " },
    { songName: "Pyar hota Kayi Baar ", filePath: "songs/5.mp3", coverPath: "covers5.jpg " },
    { songName: "Soulmate ", filePath: "songs/6.mp3", coverPath: "covers6.jpg " },
    { songName: "Lost in wave", filePath: "songs/7.mp3", coverPath: "covers7.jpg " },
    { songName: "Tu hai kahan", filePath: "songs/8.mp3", coverPath: "covers8.jpg " },
    { songName: "Perfect ", filePath: "songs/9.mp3", coverPath: "covers9.jpg " },
    { songName: "Guzarish", filePath:"songs/10.mp3", coverPath: "covers10.jpg"},
]

songItems.forEach((element, i) => {
    // console.log(element , i );
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();
// handle play pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to Event
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}




Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target); 
        makeAllPlays();
        // masterSongName.innerText = songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})