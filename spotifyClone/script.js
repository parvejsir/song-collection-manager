console.log("Welcome to Spotify");
//variable Initialization
let songIndex=-1;
let audioElement=new Audio('premika.mp3');
let masterPlay=document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
console.log(songItem);
// audioElement.play();
let songs=[
    {songName:"Aankho Mein Teri",filepath:"songs/1.mp3",coverPath:"1.jpg"},
    {songName:"Labon Ko",filepath:"songs/2.mp3",coverPath:"2.jpg"},
    {songName:"Zara Sa",filepath:"songs/3.mp3",coverPath:"3.jpg"},
    {songName:"Dil Ibadat",filepath:"songs/4.mp3",coverPath:"4.jpg"},
    {songName:"O Jaana",filepath:"songs/5.mp3",coverPath:"5.jpg"},
    {songName:"India Waale",filepath:"songs/6.mp3",coverPath:"6.jpg"},
    {songName:"Tune Maari Enteriyaan",filepath:"songs/7.mp3",coverPath:"7.jpg"},
]

 songItem.forEach((element,index) => {
    console.log(element,index);
   element.getElementsByTagName("img").src=songs[index].coverPath;
   element.getElementsByClassName("songName").innerText=songs[index].songName;
 });
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(songIndex==-1){
      
        if(audioElement.paused|| audioElement.currentTime<=0){
            audioElement.play();
            masterSongName.innerText='Premika Ne Pyaar Se-Udit Narayan';
            masterPlay.classList.remove('fa-circle-play')  
            masterPlay.classList.add('fa-circle-pause')  
            gif.style.opacity=1;
        }else{
            audioElement.pause();
            allPause();
            masterPlay.classList.remove('fa-circle-pause')  
            masterPlay.classList.add('fa-circle-play') 
            gif.style.opacity=0;
        }   
    }else{
    if(audioElement.paused|| audioElement.currentTime<=0){
        let songId=document.getElementById(`${songIndex}`);
        songId.classList.remove('fa-circle-play')
        songId.classList.add('fa-circle-pause')
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')  
        masterPlay.classList.add('fa-circle-pause')  
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        allPause();
        masterPlay.classList.remove('fa-circle-pause')  
        masterPlay.classList.add('fa-circle-play') 
        gif.style.opacity=0;
    }
}})
//Listen to Event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update myProgressBar
    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    // console.log('progress');
    myProgressBar.value=progress;
})
//audio adjust when progressBar change
myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime=parseFloat(myProgressBar.value) * parseFloat(audioElement.duration/100);
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        audioElement.currentTime=0;
        audioElement.play();

    })
}
const allPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       

    })
}
// const Idgate(songIndex){
//     int Id=
// }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        makeAllPlays();
        if(audioElement.paused|| audioElement.currentTime<=0){
            audioElement.src=`songs/${songIndex+1}.mp3`;
            audioElement.play();
            masterSongName.innerText=songs[songIndex].songName;
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause')
            masterPlay.classList.remove('fa-circle-play')  
            masterPlay.classList.add('fa-circle-pause')  
            gif.style.opacity=1;
        }else{
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            masterPlay.classList.remove('fa-circle-pause')  
            masterPlay.classList.add('fa-circle-play') 
            gif.style.opacity=0;
        }
       
    })   
})
document.getElementById('previous').addEventListener('click',()=>{
    // let songId=document.getElementById(`${songIndex}`);
    //     songId.classList.remove('fa-circle-play')
    //     songId.classList.add('fa-circle-pause')
    if(songIndex==0){
        pauseStatus(songIndex);
        songIndex=6;
        playStatus(songIndex);
       }else{
        pauseStatus(songIndex);
        songIndex-=1;
        playStatus(songIndex);
       }
    //    let songId=document.getElementById(`${songIndex}`);
    //     songId.classList.remove('fa-circle-pause')
    //     songId.classList.add('fa-circle-play')
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.src=`songs/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
})
function playStatus( i){
    let index=document.getElementById(`${i}`);
    index.classList.remove('fa-circle-play')
    index.classList.add('fa-circle-pause')
}
function pauseStatus( i){
    let index=document.getElementById(`${i}`);
    index.classList.remove('fa-circle-pause')
    index.classList.add('fa-circle-play')
}
document.getElementById('next').addEventListener('click',()=>{
    // let songId=document.getElementById(`${songIndex}`);
    //     songId.classList.remove('fa-circle-play')
    //     songId.classList.add('fa-circle-pause')
   if(songIndex==6){
    pauseStatus(songIndex);
    songIndex=0;
    playStatus(songIndex);
   }else{
    pauseStatus(songIndex);
    songIndex+=1;
    playStatus(songIndex);
   }
   if(audioElement.paused|| audioElement.currentTime<=0){
  
    masterSongName.innerText=songs[songIndex].songName;
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
    masterPlay.classList.remove('fa-circle-play')  
    masterPlay.classList.add('fa-circle-pause')  
    gif.style.opacity=1;
}else{
    masterSongName.innerText=songs[songIndex].songName;
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
}
//    let songId=document.getElementById(`${songIndex}`);
//         songId.classList.remove('fa-circle-pause')
//         songId.classList.add('fa-circle-play')
   masterSongName.innerText=songs[songIndex].songName;
   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
})