/* =========================================================
   SYNVORA — CURSOR GLOW
========================================================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


/* =========================================================
   INTERACTIVE PORTFOLIO PROJECTS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const portfolioCards =
        document.querySelectorAll(".portfolio-card");

    const projectModal =
        document.getElementById("projectModal");

    const modalVideo =
        document.getElementById("modalVideo");

    const modalClose =
        document.querySelector(".modal-close");

    const modalOverlay =
        document.querySelector(".project-modal-overlay");


    /* PROJECT DATA */

    const projects = {

        ai: {

            category: "AI SOLUTIONS",

            title: "AI Business Assistant",

            description:
                "An intelligent AI-powered assistant designed to automate customer support and business operations.",

            challenge:
                "Businesses often spend significant time handling repetitive customer questions and support requests.",

            solution:
                "We design AI assistants that understand user requests and provide intelligent automated responses.",

            how:
                "The AI receives a request, processes the information and connects with business systems to deliver the right response.",

            video: "videos/ai-assistant.mp4",

            technologies:
                ["AI", "Python", "APIs", "Cloud"]

        },


        automation: {

            category: "AUTOMATION",

            title: "Smart Business Automation",

            description:
                "Intelligent workflows that connect business tools and automate repetitive operations.",

            challenge:
                "Teams often waste valuable time performing repetitive manual tasks across multiple platforms.",

            solution:
                "We connect business systems and automate repetitive workflows to improve efficiency.",

            how:
                "When an event occurs, the automation workflow processes the information and automatically triggers the required actions.",

            video: "videos/automation.mp4",

            technologies:
                ["Automation", "APIs", "JavaScript", "Cloud"]

        },


        web: {

            category: "WEB DEVELOPMENT",

            title: "Modern Digital Platform",

            description:
                "High-performance, responsive digital platforms designed for modern businesses and startups.",

            challenge:
                "Businesses need a strong digital presence that works seamlessly across desktop and mobile devices.",

            solution:
                "We build fast, responsive and scalable websites focused on user experience and business goals.",

            how:
                "We combine modern frontend technologies, responsive design and scalable backend systems to create reliable digital platforms.",

            video: "videos/web-development.mp4",

            technologies:
                ["HTML", "CSS", "JavaScript", "React"]

        },


        cloud: {

            category: "CLOUD & DEVOPS",

            title: "Scalable Cloud Infrastructure",

            description:
                "Secure and scalable cloud infrastructure designed for reliable and growing applications.",

            challenge:
                "Growing applications need infrastructure that can handle increasing traffic while remaining secure and reliable.",

            solution:
                "We design scalable cloud environments with deployment, monitoring and security in mind.",

            how:
                "Applications are deployed to cloud infrastructure with automated deployment and monitoring systems.",

            video: "videos/cloud.mp4",

            technologies:
                ["AWS", "Docker", "DevOps", "Cloud"]

        }

    };


    /* =========================================================
       OPEN PROJECT
    ========================================================= */

    portfolioCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const projectId =
                card.getAttribute("data-project");

            const project =
                projects[projectId];

            if (!project) return;


            document.getElementById(
                "modalCategory"
            ).textContent =
                project.category;


            document.getElementById(
                "modalTitle"
            ).textContent =
                project.title;


            document.getElementById(
                "modalDescription"
            ).textContent =
                project.description;


            document.getElementById(
                "modalChallenge"
            ).textContent =
                project.challenge;


            document.getElementById(
                "modalSolution"
            ).textContent =
                project.solution;


            document.getElementById(
                "modalHow"
            ).textContent =
                project.how;


            /* UPDATE VIDEO */

            modalVideo.src =
                project.video;


            /* UPDATE TECHNOLOGIES */

            const techList =
                document.getElementById(
                    "modalTechList"
                );

            techList.innerHTML = "";

            project.technologies.forEach(
                function (tech) {

                    const tag =
                        document.createElement(
                            "span"
                        );

                    tag.textContent =
                        tech;

                    techList.appendChild(
                        tag
                    );

                }
            );


            /* OPEN MODAL */

            projectModal.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";


            /* HIDE DETAILS */

            const projectDetails =
                document.getElementById(
                    "projectDetails"
                );

            projectDetails.classList.remove(
                "show"
            );


            /* START VIDEO */

            modalVideo.play()
                .catch(function () {

                    console.log(
                        "Video requires user interaction."
                    );

                });


            /* SHOW DETAILS AFTER VIDEO */

            modalVideo.onended = function () {

                projectDetails.classList.add(
                    "show"
                );

            };

        });

    });


    /* =========================================================
       CLOSE PROJECT MODAL
    ========================================================= */

    function closeProjectModal() {

        projectModal.classList.remove(
            "active"
        );

        modalVideo.pause();

        modalVideo.currentTime = 0;

        modalVideo.src = "";

        document.body.style.overflow = "";

    }


    const startSimilarProject =
        document.querySelector(
            "#startSimilarProject"
        );


    if (startSimilarProject) {

        startSimilarProject.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeProjectModal();

                setTimeout(function () {

                    document.querySelector(
                        "#contact"
                    ).scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }, 300);

            }
        );

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeProjectModal
        );

    }


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal.classList.contains(
                    "active"
                )
            ) {

                closeProjectModal();

            }

        }
    );

});


/* =========================================================
   SYNVORA — INTERACTIVE STATS COUNTER
========================================================= */

const statNumbers =
    document.querySelectorAll(
        ".stat-card h2"
    );


const statsObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                ) return;


                const counter =
                    entry.target;


                const targetText =
                    counter.textContent.trim();


                /* INFINITY */

                if (
                    targetText === "∞"
                ) {

                    counter.textContent =
                        "∞";

                    observer.unobserve(
                        counter
                    );

                    return;

                }


                const target =
                    parseInt(
                        targetText
                    );


                if (
                    isNaN(target)
                ) return;


                let current = 0;


                const suffix =
                    targetText.includes("+")
                        ? "+"
                        : "";


                const duration =
                    1500;


                const increment =
                    target /
                    (duration / 16);


                const updateCounter =
                    () => {

                        current +=
                            increment;


                        if (
                            current <
                            target
                        ) {

                            counter.textContent =
                                Math.ceil(
                                    current
                                ) + suffix;


                            requestAnimationFrame(
                                updateCounter
                            );

                        }

                        else {

                            counter.textContent =
                                target +
                                suffix;

                        }

                    };


                updateCounter();


                observer.unobserve(
                    counter
                );

            });

        },

        {
            threshold: 0.6
        }

    );


statNumbers.forEach(stat => {

    statsObserver.observe(
        stat
    );

});


/* =========================================================
   SYNVORA — SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(

        ".service-card, " +

        ".tech-card, " +

        ".portfolio-card, " +

        ".about-card, " +

        ".process-card, " +

        ".contact-item, " +

        ".contact-form-wrapper, " +

        ".section-title"

    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                ) return;


                entry.target.classList.add(
                    "reveal-visible"
                );


                observer.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );


    revealObserver.observe(
        element
    );

});


/* =========================================================
   SYNVORA — PREMIUM HERO PARALLAX
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Disable parallax on touch devices */

        if (
            window.matchMedia(
                "(hover: none)"
            ).matches
        ) {
            return;
        }


        const homeRight =
            document.querySelector(
                ".home-right"
            );


        const heroImage =
            document.querySelector(
                ".hero-image"
            );


        const orbits =
            document.querySelectorAll(
                ".orbit"
            );


        const floatingCards =
            document.querySelectorAll(
                ".floating-card"
            );


        if (
            !homeRight
        ) return;


        let mouseX = 0;

        let mouseY = 0;

        let currentX = 0;

        let currentY = 0;


        /* MOUSE TRACKING */

        homeRight.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    homeRight.getBoundingClientRect();


                mouseX =
                    (
                        e.clientX -
                        rect.left -
                        rect.width / 2
                    )
                    /
                    (rect.width / 2);


                mouseY =
                    (
                        e.clientY -
                        rect.top -
                        rect.height / 2
                    )
                    /
                    (rect.height / 2);

            }
        );


        /* RESET WHEN MOUSE LEAVES */

        homeRight.addEventListener(
            "mouseleave",
            function () {

                mouseX = 0;

                mouseY = 0;

            }
        );


        /* SMOOTH PARALLAX */

        function animateParallax() {

            currentX +=
                (
                    mouseX -
                    currentX
                ) * 0.08;


            currentY +=
                (
                    mouseY -
                    currentY
                ) * 0.08;


            /* HERO IMAGE */

            if (
                heroImage
            ) {

                heroImage.style.transform =
                    `
                    translate(
                        ${currentX * 14}px,
                        ${currentY * 14}px
                    )
                    `;

            }


            /* ORBIT RINGS */

            orbits.forEach(
                function (
                    orbit,
                    index
                ) {

                    const strength =
                        5 +
                        (
                            index * 4
                        );


                    orbit.style.marginLeft =
                        `${
                            currentX *
                            strength
                        }px`;


                    orbit.style.marginTop =
                        `${
                            currentY *
                            strength
                        }px`;

                }
            );


            /* FLOATING CARDS */

            floatingCards.forEach(
                function (
                    card,
                    index
                ) {

                    const strength =
                        8 +
                        (
                            index *
                            4
                        );


                    const rotate =
                        currentX *
                        (
                            2 +
                            index
                        );


                    card.style.transform =
                        `
                        translate(
                            ${currentX * strength}px,
                            ${currentY * strength}px
                        )
                        rotate(${rotate}deg)
                        `;

                }
            );


            requestAnimationFrame(
                animateParallax
            );

        }


        animateParallax();

    }
);