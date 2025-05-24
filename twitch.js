

document.addEventListener("DOMContentLoaded", function()  {
    const fahad = document.querySelector("#fahad");
    const saudiArabia = document.querySelector(".box");
    const diratFahad = document.querySelector(".dirat-fahad");
    const backToMenu = document.querySelector("#btm")

    diratFahad.style.display = "none" ;

    fahad.addEventListener("click", function(){  
        if(saudiArabia.style.display !== "none") {
            saudiArabia.style.display = "none" ;
            diratFahad.style.display = "inline-block";
        } 
        backToMenu.addEventListener("click", function(){
            saudiArabia.style.display = "inline-block";
            diratFahad.style.display = "none";

        })
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const riyadh = document.querySelector("#riyadh");
    const saudiArabia = document.querySelector(".box");
    const capital = document.querySelector(".riyadh");
    const back = document.querySelector("#bttm");

    capital.style.display= "none"; 
    
    riyadh.addEventListener("click", function(){
        if(saudiArabia.style.display !== "none") {
            saudiArabia.style.display = "none";
            capital.style.display = "inline-block";
        }
        back.addEventListener("click", function(){
            saudiArabia.style.display ="inline-block";
            capital.style.display = "none" ;
        })
    })

})

document.addEventListener("DOMContentLoaded", function(){
    const jeddah = document.querySelector("#jeddah");
    const saudiArabia = document.querySelector(".box");
    const RedSeaBride = document.querySelector(".jeddah");
    const button = document.querySelector("#bttn");
    const day = document.querySelector("#sun");
    const night = document.querySelector("#moon");
    const jeddahDay = document.querySelector("#jeddah-day");
    const jeddahNight = document.querySelector("#jeddah-night");

    RedSeaBride.style.display= "none";
    jeddahNight.style.display = "none";
    jeddahDay.style.display = "block";

    jeddah.addEventListener("click", function(){
        if(saudiArabia.style.display !== "none"){
            saudiArabia.style.display = "none";
            RedSeaBride.style.display = "inline-block";
        }
        button.addEventListener("click", function(){
            saudiArabia.style.display ="inline-block";
            RedSeaBride.style.display = "none";
        })
    });  
    
    day.addEventListener("click", function(){
           jeddahDay.style.display ="block";
           jeddahNight.style.display= "none";
    });
    night.addEventListener("click", function(){
        jeddahNight.style.display = "block";
        jeddahDay.style.display = "none"
    })


})

document.addEventListener("DOMContentLoaded", function(){
    const south = document.querySelector("#south");
    const saudiArabia = document.querySelector(".box");
    const polaroids = document.querySelector(".south");
    const menu = document.querySelector("#btn")

    polaroids.style.display = "none";

    south.addEventListener("click", function(){
        if(saudiArabia.style.display !== "none"){
            saudiArabia.style.display="none";
            polaroids.style.display="block";
        } 
        menu.addEventListener("click", function(){
            polaroids.style.display="none";
            saudiArabia.style.display="block";
        })
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const east = document.querySelector("#east");
    const saudiArabia = document.querySelector(".box");
    const sharkiyah = document.querySelector(".east");
    const menu = document.querySelector("#bto");

    sharkiyah.style.display = "none";

    east.addEventListener("click", function(){
        if(saudiArabia.style.display !== "none"){
            saudiArabia.style.display = "none";
            sharkiyah.style.display = "inline-block";
        }
        menu.addEventListener("click", function(){
            sharkiyah.style.display = "none";
            saudiArabia.style.display = "inline-block";
            
        })
    })
    const levels = [
        {
            emoji: "👨‍⚕️🌙🐆",
            answer: "فهد"
        },
        {
            emoji: "📱📻🍍🐟",
            answer: "ساره",
        },
        {
            emoji: "🥭✋📻🥭",
            answer: "مريم",
        },
        {
            emoji: "📻🐟🍍",
            answer: "اسر" ,
        },
        {
            emoji: "🍓🐟🌷✋",
            answer: "يوسف",
        },
        {
            emoji: "🍓✋🐅🥭",
            answer: "منيف",
        },
        {
            emoji: "🐁🐇🌷🔥",
            answer: "نواف",
        },
        {
            emoji: "✋🐁🌷🐔",
            answer: "دوفي",
        },
        {
            emoji: "🥭✋📻📷",
            answer: "كريم",
        },
        {
            emoji: "ى🍊✋🍊",
            answer: "ليلى",
        },
        {
            emoji: "🍊✋🐟🍍",
            answer: "اسيل",
        },
        {
            emoji: "🌷📻🍍📱",
            answer: "هارو",
        },
        {
            emoji: "🍎📻✋🥭🍍",
            answer: "اميرة",
        },
        {
            emoji: "🌷🚕🍍📷",
            answer: "كاتو",
        },
        {
            emoji: "17 + 🐔🌷🍟👁",
            answer: "عبود17",
        },
        {
            emoji: "🍍🧟🐅✋📷",
            answer: "كينزا",
        },
        {
            emoji: "🔥🍍🧟📻",
            answer: "رزان",
        },
        {
            emoji: "🔥🍍✋📻",
            answer: "ريان",
        },
        {
            emoji: "🔥🌷🌕🍍",
            answer: "ايقون"
        },
        {
            emoji: "🍎🔥🍍⚽🍊🐟",
            answer: "سلطانة",
        },
        {
            emoji: "📻🍎",
            answer: "تي ار",
        },
        {
            emoji: "✋🥭🍍📻",
            answer: "رامي",
        },
        {
            emoji:"🌷🔥🌕🍓",
            answer: "فقنو",
        },
        {
            emoji: "🥕🌷🍓",
            answer: "فوج",
        },
        {
            emoji: "🔥🍍🐟",
            answer: "سان",
        }
    ];

    let currentLevel = 0;
    const emojiDisplay = document.querySelector("#emoji-display");
    const guessInput = document.querySelector("#guess-input");
    const submit = document.querySelector("#submit-btn");
    const progress = document.querySelector("#progress")

    function startGame(){
        if(emojiDisplay){
            emojiDisplay.textContent = levels[currentLevel].emoji;
            updateProgress();
        }
    }

    function checkAnswer(){
        const userGuess = guessInput.value.trim();
        const correctAnswer = levels[currentLevel].answer;
        
        if(userGuess === correctAnswer){

        
        currentLevel++;

        if(currentLevel < levels.length){
            setTimeout(() =>{
                 emojiDisplay.textContent = levels[currentLevel].emoji;
                 guessInput.value = "";
                 updateProgress();
            }, 1000);
        }else{
            guessInput.disabled = true;
            submit.disabled = true;
        }
    } else{
            guessInput.value= "";
        }
    }

    function updateProgress(){
        if(progress){
            progress.textContent = `level : ${currentLevel+1} / ${levels.length}`;
        }
    }

    if(submit && guessInput){
        submit.addEventListener("click", checkAnswer);
        // guessInput.addEventListener("keypress", function(event){
        //     checkAnswer();
        // })
    }
startGame();
})
document.addEventListener("DOMContentLoaded", function(){
    const mekkah = document.querySelector("#makkah");
    const saudiArabia = document.querySelector(".box");
    const holyLand = document.querySelector(".mekkah");
    const menu = document.querySelector("#btt")

    holyLand.style.display = "none";

    mekkah.addEventListener("click", function(){
        if(saudiArabia.style.display !== "none"){
            saudiArabia.style.display="none";
            holyLand.style.display="block";
        } 
        menu.addEventListener("click", function(){
            holyLand.style.display="none";
            saudiArabia.style.display="block";
        })
    })
})
