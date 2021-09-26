/* innerheight,innerwidth : lấy chiều cao và chiều rộng của khung */
const boxes = document.querySelectorAll('.column')

window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
/* getBoundingClientRect để lấy kích thước và vị trí của một phần tử. */
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}