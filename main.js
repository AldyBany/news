const burgerIcon = document.querySelector('#burger')
const navMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('is-active')
})

// tabs
const tabs = document.querySelectorAll('.tabs li')
const tabsContent = document.querySelectorAll('#tab-content > div')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active')

        const target = tab.dataset.target
        tabsContent.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden')
            } else {
                box.classList.add('is-hidden')
            }
        })
    })
})