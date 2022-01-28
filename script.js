const navIcon = document.querySelector("#nav-icon")
const navMenu = document.querySelector(".nav ul")
const revealButton = document.querySelector("#reveal-button")
const titleSection = document.querySelector(".title-section")
const infoSection = document.querySelector(".info-section")
const projectDivs = document.querySelectorAll(".project-div")

function showNav(event) {
    console.log(navMenu)
    if (!navMenu.style.display || navMenu.style.display === "none") {
        navMenu.style.display = "flex"
    } else {
        navMenu.style.display = "none"
    }
}

function showInfoSection(event) {
    if (titleSection.className === "title-section") {
        titleSection.className = "title-section-expand"
    } else {
        titleSection.className = "title-section"
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