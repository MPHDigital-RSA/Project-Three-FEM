
// grabbing the links
let featuresLink = document.querySelector("#features-link")
let companyLink = document.querySelector("#company-link")


// grabbing the arrow image container
let featuresArrow = document.querySelector("#features-arrow")
let companyArrow = document.querySelector("#company-arrow")

// grabbing the sub-menus
let subMenuOne = document.querySelector("#sub-menu-1")
let subMenuTwo = document.querySelector("#sub-menu-2")


featuresLink.addEventListener("mouseover", function () {
    let direction = "icon-arrow-up.svg"
    changeArrowFeatures(direction)
    subMenuOne.style.display = "flex"
})

featuresLink.addEventListener("mouseout", function () {
    let direction = "icon-arrow-down.svg"
    changeArrowFeatures(direction)
    subMenuOne.style.display = "none"
})

companyLink.addEventListener("mouseover", function () {
    let direction = "icon-arrow-up.svg"
    changeArrowCompany(direction)
    subMenuTwo.style.display = "flex"

})

companyLink.addEventListener("mouseout", function () {
    let direction = "icon-arrow-down.svg"
    changeArrowCompany(direction)
    subMenuTwo.style.display = "none"
})










function changeArrowFeatures(arrowDirection) {
    let arrowImg = document.createElement("img")
    arrowImg.src = arrowDirection

    featuresArrow.replaceChild(arrowImg, featuresArrow.childNodes[1])
}

function changeArrowCompany(arrowDirection) {
    let arrowImg = document.createElement("img")
    arrowImg.src = arrowDirection

    companyArrow.replaceChild(arrowImg, companyArrow.childNodes[1])
}