console.log("Welcome to spotify.");

//Intialize the variables that can access the HTML elements/tags. Then use these vaiables in code.

let songIndex = 0;
let audioElement = new Audio("Songs/Luis-Fonsi-Ft-Daddy-Yankee-Despacito-(TrendyBeatz.com).mp3");
let masterPlay = document.querySelector("#F8");
let myProgressBar = document.querySelector("#F5");
let gifVar = document.querySelector("#gif");
const Songitems = Array.from(document.querySelectorAll(".songItem"));
const SongText = document.querySelector("#F69");

let Songsli = [
    {songName : "1.mp3", filePath : "Songs/1.mp3", coverPath : "Images/1.jpg"},
    {songName : "2.mp3", filePath : "Songs/2.mp3", coverPath : "Images/2.jpg"},
    {songName : "3.mp3", filePath : "Songs/3.mp3", coverPath : "Images/3.jpg"},
    {songName : "4.mp3", filePath : "Songs/4.mp3", coverPath : "Images/4.jpg"},
    {songName : "5.mp3", filePath : "Songs/5.mp3", coverPath : "Images/5.jpg"},
    {songName : "Luis-Fonsi-ft-Daddy-Yankee-Despacito", filePath : "Songs/6.mp3", coverPath : "Images/Despacito.jpg"},
    {songName : "OMG_320(PagalWorld)", filePath : "Songs/7.mp3", coverPath : "Images/12.png"},
]

Songitems.forEach((Element, i)=>{
    Element.getElementsByClassName("F57")[0].src = Songsli[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = Songsli[i].songName;
    
})

const makeAllPlays = ()=>{
    Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.querySelectorAll(".songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (evt)=>{
        console.log(evt.target);
        songIndex = parseInt(evt.target.id);
        makeAllPlays();
        evt.target.classList.remove('fa-play-circle');
        evt.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        gifVar.style.opacity = 1;
        audioElement.currentTime = 0;
        SongText.innerText = Songsli[songIndex].songName;
        audioElement.play();
        masterPlay.src="Images/circle-pause-solid-full.svg"; 
    })
})

const neX = document.querySelector("#next");
neX.addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    SongText.innerText = Songsli[songIndex].songName;
    audioElement.play();
    gifVar.style.opacity = 1;
    masterPlay.src="Images/circle-pause-solid-full.svg";
})

const perv = document.querySelector("#previous");
perv.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    SongText.innerText = Songsli[songIndex].songName;
    audioElement.play();
    gifVar.style.opacity = 1;
    masterPlay.src="Images/circle-pause-solid-full.svg";
})

//audioElement.play();

//Handle pause/play click:
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        gifVar.style.opacity = 1;
        masterPlay.src="Images/circle-pause-solid-full.svg";   
    }
    else{
        audioElement.pause();
        gifVar.style.opacity = 0;
        masterPlay.src="Images/circle-play-solid-full.svg"; 
    }
});

//Listen to events:
audioElement.addEventListener('timeupdate', ()=>{
       console.log('timeupdate');
       //Seekbar update:
       let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
       console.log(progress);
       myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
