var photo = document.querySelectorAll('.photo');
photo.forEach(image => {
    image.addEventListener('click', () => {
        removefirstClasses()
        image.classList.add('first')
    })
})

function removefirstClasses() {
    photo.forEach(image => {
        image.classList.remove('first')
    })
}