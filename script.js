const navIcon = document.querySelector("#nav-icon")
const navMenu = document.querySelector(".nav ul")
const revealButton = document.querySelector("#reveal-button")
const titleSection = document.querySelector(".title-section")
const infoSection = document.querySelector(".info-section")
const projectDivs = document.querySelectorAll(".project-div")
const titleParagraph = document.querySelector("#title-paragraph")

function showNav(event) {
    console.log(navMenu)
    if (!navMenu.style.display || navMenu.style.display === "none") {
        navMenu.style.display = "flex"
    } else {
        navMenu.style.display = "none"
    }
}

function showInfoSection(event) {
    let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width
    if (titleParagraph.id === "title-paragraph" || titleParagraph.id === "title-paragraph-unexpand") {
        if (screenWidth < 1125) titleSection.className = "title-section-expand"
        titleParagraph.id = "title-paragraph-expand"
        revealButton.id = "revealed-button"
    } else {
        if (screenWidth < 1125) titleSection.className = "title-section-unexpand"
        titleParagraph.id = "title-paragraph-unexpand"
        revealButton.id = "re-reveal-button"
    }
}

function showProject(event) {
    if (event.target.className === "project-div") {
        event.target.className = "project-div-expand"
    } else if (event.target.className === "project-div-expand") {
        event.target.className = "project-div"
    }
}

projectDivs.forEach((div) => {
    div.addEventListener('click', showProject)
})
navIcon.addEventListener('click', showNav)
revealButton.addEventListener('click', showInfoSection)