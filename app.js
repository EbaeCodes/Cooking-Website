//for toggling of the button
const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element
    throw Error('Double check your class names')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

//for adding date automatically to the footer
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
