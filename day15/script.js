const frames = document.querySelectorAll('.frame')
frames.forEach(frame => {
    frame.innerText = '0'
    const updateframe = () => {
        const a = +frame.getAttribute("id")
        const c = +frame.innerText
        const increment = a / 500

        if (c < a) {
            frame.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateframe, 1)
        } else {
            frame.innerText = a
        }
    }

    updateframe()
})