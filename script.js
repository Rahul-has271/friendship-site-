/* =========================================
   SECTION NAVIGATION
========================================= */

const navigationButtons =
    document.querySelectorAll(".next-btn");


navigationButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;

        const target =
            document.getElementById(targetId);


        if (!target) {
            return;
        }


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================
   ENTER BUTTON
========================================= */

const enterBtn =
    document.getElementById("enterBtn");


enterBtn.addEventListener("click", () => {

    const whySection =
        document.getElementById("why");


    whySection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================
   SMILE BUTTONS
========================================= */

const yesSmile =
    document.getElementById("yesSmile");


const noSmile =
    document.getElementById("noSmile");


const smileResponse =
    document.getElementById("smileResponse");


yesSmile.addEventListener("click", () => {

    smileResponse.textContent =
        "Yesss! 😌 Then my little mission worked. 🌸";

});


noSmile.addEventListener("click", () => {

    smileResponse.textContent =
        "Oh no... 😭 Okay, I clearly need to try harder. 😂";

});



/* =========================================
   FRIENDSHIP BUTTONS
========================================= */

const friendYes =
    document.getElementById("friendYes");


const friendThink =
    document.getElementById("friendThink");


const friendResponse =
    document.getElementById("friendResponse");



friendYes.addEventListener("click", () => {

    friendResponse.innerHTML = `

        🎉

        <br>

        <strong>
            Friendship unlocked!
        </strong>

        <br><br>

        <small>

            Level 1:
            Strangers → Friends 🌸

            <br><br>

            Possible future upgrades:

            <br>

            😂 Random conversations

            <br>

            ☕ Coffee conversations

            <br>

            🌙 Late-night talks

            <br>

            🤣 Completely unnecessary memes

            <br>

            🫶 Being there on bad days

            <br><br>

            No rush.
            Let's just see where friendship takes us. 🌷

        </small>

    `;


    setTimeout(() => {

        const finalSection =
            document.getElementById("final");


        finalSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 3500);

});



friendThink.addEventListener("click", () => {

    friendResponse.innerHTML = `

        That's completely okay. 😊

        <br><br>

        <small>

            Take your time, Sashmita.

            <br>

            I'm not asking for an answer right away. 🌷

            <br><br>

            For now, just keep being the lovely,
            hardworking person you are.

        </small>

    `;

});



/* =========================================
   DESERVE CARD INTERACTION
========================================= */

const deserveCards =
    document.querySelectorAll(".deserve-card");


deserveCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform =
            "scale(0.96)";


        setTimeout(() => {

            card.style.transform = "";

        }, 180);

    });

});