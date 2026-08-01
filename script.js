const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

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

            title:
                "AI Business Assistant",

            description:
                "An intelligent AI-powered assistant designed to automate customer support and business operations.",

            challenge:
                "Businesses often spend significant time handling repetitive customer questions and support requests.",

            solution:
                "We design AI assistants that understand user requests and provide intelligent automated responses.",

            how:
                "The AI receives a request, processes the information and connects with business systems to deliver the right response.",

            video:
                "videos/ai-assistant.mp4",

            technologies:
                ["AI", "Python", "APIs", "Cloud"]

        },


        automation: {

            category:
                "AUTOMATION",

            title:
                "Smart Business Automation",

            description:
                "Intelligent workflows that connect business tools and automate repetitive operations.",

            challenge:
                "Teams often waste valuable time performing repetitive manual tasks across multiple platforms.",

            solution:
                "We connect business systems and automate repetitive workflows to improve efficiency.",

            how:
                "When an event occurs, the automation workflow processes the information and automatically triggers the required actions.",

            video:
                "videos/automation.mp4",

            technologies:
                ["Automation", "APIs", "JavaScript", "Cloud"]

        },


        web: {

            category:
                "WEB DEVELOPMENT",

            title:
                "Modern Digital Platform",

            description:
                "High-performance, responsive digital platforms designed for modern businesses and startups.",

            challenge:
                "Businesses need a strong digital presence that works seamlessly across desktop and mobile devices.",

            solution:
                "We build fast, responsive and scalable websites focused on user experience and business goals.",

            how:
                "We combine modern frontend technologies, responsive design and scalable backend systems to create reliable digital platforms.",

            video:
                "videos/web-development.mp4",

            technologies:
                ["HTML", "CSS", "JavaScript", "React"]

        },


        cloud: {

            category:
                "CLOUD & DEVOPS",

            title:
                "Scalable Cloud Infrastructure",

            description:
                "Secure and scalable cloud infrastructure designed for reliable and growing applications.",

            challenge:
                "Growing applications need infrastructure that can handle increasing traffic while remaining secure and reliable.",

            solution:
                "We design scalable cloud environments with deployment, monitoring and security in mind.",

            how:
                "Applications are deployed to cloud infrastructure with automated deployment and monitoring systems.",

            video:
                "videos/cloud.mp4",

            technologies:
                ["AWS", "Docker", "DevOps", "Cloud"]

        }

    };


    /* OPEN PROJECT */

    portfolioCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const projectId =
                card.getAttribute("data-project");

            const project =
                projects[projectId];

            if (!project) return;


            /* UPDATE CONTENT */

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

projectModal.classList.add("active");

document.body.style.overflow = "hidden";


/* HIDE DETAILS */

const projectDetails =
    document.getElementById("projectDetails");

projectDetails.style.display =
    "none";


/* START VIDEO */

modalVideo.play()
    .catch(function () {

        console.log(
            "Video requires user interaction."
        );

    });


/* SHOW DETAILS AFTER VIDEO */

modalVideo.onended = function () {

    projectDetails.style.display =
        "block";

    projectDetails.style.animation =
        "detailsReveal .7s ease";

};
        });

    });


    /* CLOSE MODAL */

    function closeProjectModal() {

        projectModal.classList.remove(
            "active"
        );

        modalVideo.pause();

        modalVideo.currentTime =
            0;

        modalVideo.src = "";

        document.body.style.overflow =
            "";

    }


    modalClose.addEventListener(
        "click",
        closeProjectModal
    );


    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeProjectModal();

            }

        }
    );

});