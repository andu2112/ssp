const playbutton=document.getElementById("playbutton");
playbutton.addEventListener("click", event => {
  playbutton.style.display="none";
let time= 4;
  let teller= setInterval(function (){
    --time;
     document.getElementById("teller2").innerHTML=time;
   if(time<=0){
   time= 4;
   }
   },600);
  });

const computerChoiceDisplay = document.getElementById('computer')
const userChoiceDisplay = document.getElementById('bruker')
const rasv = document.getElementById('result')
const jens = document.querySelectorAll('button')
const score = document.getElementById(`score`)


function changetext() {
    document.getElementById("230").innerHTML=("stein saks pappir");
    
}




jens.forEach(valgene => valgene.addEventListener('click', (a) => {
  userChoice = a.target.id
  
  userChoiceDisplay.innerHTML = userChoice
  lag()
  getResult()
}))


function lag() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'stein'
  }
  if (randomNumber === 2) {
    computerChoice = 'saks'
  }
  if (randomNumber === 3) {
    computerChoice = 'pappir'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  let result

  if (computerChoice === userChoice) {
    result = 'tie'
  } 
  if (computerChoice === 'stein' && userChoice === "pappir") {
    result = 'tap'
  }
  if (computerChoice === 'stein' && userChoice === "pappir") {
    result = 'vinner'
  }
  if (computerChoice === 'pappir' && userChoice === "saks") {
    result = 'vinner'
  }
  if (computerChoice === 'pappir' && userChoice === "stein") {
    result = 'tap'
  }
  if (computerChoice === 'saks' && userChoice === "stein") {
    result = 'vinner'
  }
  if (computerChoice === 'saks' && userChoice === "pappir") {
    result = 'tap'
  }
  if (computerChoice === 'stein' && userChoice === "saks") {
    result = 'tap'
  }
  rasv.innerHTML = result
  if (result==='tap'){
    const audio = new Audio('audio/yt5s.com - Sad Trombone - Gaming Sound Effect (HD) (128 kbps).mp3')

    audio.play()
    
  }
  if(result===`vinner`){
    const audio = new Audio('audio/yt5s.com - Microsoft Windows XP Error - Sound Effect (HD) (128 kbps).mp3')
    audio.play()
    
    
  }
  if(result===`tie`){
    const audio = new Audio('audio/yt5s.com - Microsoft Windows XP Error - Sound Effect (HD) (128 kbps).mp3')
    audio.play()
    
  }
}



//const stein=document.getElementById("stein")
//stein.addEventListener("click", event => {
// const selectionbuttons  = document.querySelectorAll(`[data-selcetion]`)

  //selectionbuttons.forEach(selectionbutton => {
    //selectionbutton.addEventListener(`click`,  e => {  
   // const selcetionname  = selectionbutton.dataset.selcetionq
   // makeselcetion(selcetionname)
    //})
 // })

// makeselcetion(selcetion) 
 // console.log(selcetion)
//});



// document.getElementById("button").onclick = function() {
//   document.getElementById("button").style.display="none";
//   function andu(){
//     let random=Math.floor((Math.random()*3)+1);
//     console.log(random);  
//     const ssp=["stein", "saks", "papppir"];
//       const randomssp= () => `${ssp[Math.floor(Math.random()*ssp.length)]}`;
//       console.log(randomssp());
//       document.getElementById(`random-ssp`).innerText=randomssp();

//       let time= 4;
//       let teller= setInterval(function (){
//         --time;
//         document.getElementById("teller2").innerHTML=time;
//         if(time<=0){
//           time= 4;
//         }
//         },600);
//   }
//   andu();
// }
 
