/* =========================================
   WEBSITE STATE
========================================= */

let currentScreen = 1;

const totalScreens = 8;


/* =========================================
   INTRO TYPING
========================================= */

const introMessage =
    "You probably weren't expecting a website from someone who just said hi... 😂";

const introText =
    document.getElementById("introText");

const startButton =
    document.getElementById("startButton");

let typingIndex = 0;


function typeIntro() {

    if (typingIndex < introMessage.length) {

        introText.textContent +=
            introMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeIntro, 45);

    } else {

        setTimeout(() => {

            startButton.classList.remove("hidden");

            startButton.classList.add("show");

        }, 500);

    }

}


setTimeout(typeIntro, 1200);


/* =========================================
   SCREEN NAVIGATION
========================================= */

function goToScreen(screenNumber) {

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    const next =
        document.getElementById(
            `screen${screenNumber}`
        );

    if (!next) return;


    current.classList.remove("active");

    next.classList.add("active");


    currentScreen = screenNumber;


    updateProgress();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================
   PROGRESS BAR
========================================= */

function updateProgress() {

    const progressBar =
        document.getElementById("progressBar");

    const percentage =
        (currentScreen / totalScreens) * 100;

    progressBar.style.width =
        `${percentage}%`;

}


/* =========================================
   BANGALORE QUESTION
========================================= */

function chooseBangalore(answer) {

    let message = "";


    if (answer === "yes") {

        message =
            "Okayyy, Bangalore has officially passed the test. 😂";

    }

    else if (answer === "maybe") {

        message =
            "Fair enough. Bangalore is definitely complicated. 😂";

    }

    else {

        message =
            "😭 Someone please book the ticket home.";

    }


    showTemporaryMessage(message);


    setTimeout(() => {

        goToScreen(5);

    }, 1600);

}


/* =========================================
   NORMAL QUESTION
========================================= */

function chooseOption(button) {

    const container =
        button.parentElement;

    const buttons =
        container.querySelectorAll(".choice");


    buttons.forEach(btn => {

        btn.classList.remove("selected");

    });


    button.classList.add("selected");


    const nextButton =
        document.getElementById("questionNext");


    nextButton.classList.remove("disabled");

}


/* =========================================
   FUNNY ANSWER
========================================= */

function funnyAnswer(button) {

    const container =
        button.parentElement;

    const buttons =
        container.querySelectorAll(".choice");


    buttons.forEach(btn => {

        btn.classList.remove("selected");

    });


    button.classList.add("selected");


    setTimeout(() => {

        goToScreen(7);

    }, 1000);

}


/* =========================================
   TEMPORARY MESSAGE
========================================= */

function showTemporaryMessage(message) {

    const popup =
        document.createElement("div");


    popup.textContent = message;


    popup.style.position = "fixed";

    popup.style.left = "50%";

    popup.style.bottom = "35px";

    popup.style.transform =
        "translateX(-50%) translateY(20px)";


    popup.style.padding =
        "14px 22px";


    popup.style.borderRadius =
        "50px";


    popup.style.background =
        "rgba(255,255,255,0.95)";


    popup.style.color =
        "#171717";


    popup.style.fontSize =
        "14px";


    popup.style.fontWeight =
        "600";


    popup.style.zIndex =
        "9999";


    popup.style.boxShadow =
        "0 15px 40px rgba(0,0,0,0.3)";


    popup.style.opacity =
        "0";


    popup.style.transition =
        "all 0.4s ease";


    document.body.appendChild(popup);


    setTimeout(() => {

        popup.style.opacity = "1";

        popup.style.transform =
            "translateX(-50%) translateY(0)";

    }, 50);


    setTimeout(() => {

        popup.style.opacity = "0";

        popup.style.transform =
            "translateX(-50%) translateY(20px)";

    }, 1200);


    setTimeout(() => {

        popup.remove();

    }, 1700);

}


/* =========================================
   FRIENDSHIP BUTTON
========================================= */

function friendshipButton() {

    goToScreen(8);

    createCelebration();

}


/* =========================================
   CELEBRATION
========================================= */

function createCelebration() {

    const emojis = [

        "🌻",
        "✨",
        "🤝",
        "🎉",
        "🌿",
        "⭐"

    ];


    for (let i = 0; i < 45; i++) {

        const element =
            document.createElement("div");


        element.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        element.style.position =
            "fixed";


        element.style.left =
            Math.random() * 100 + "vw";


        element.style.top =
            "-40px";


        element.style.fontSize =
            15 + Math.random() * 18 + "px";


        element.style.zIndex =
            "9999";


        element.style.pointerEvents =
            "none";


        document.body.appendChild(element);


        const animation =
            element.animate(

                [

                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1

                    },

                    {

                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                        opacity: 0

                    }

                ],

                {

                    duration:
                        2200 +
                        Math.random() * 1800,

                    easing:
                        "ease-in"

                }

            );


        animation.onfinish =
            () => element.remove();

    }

}