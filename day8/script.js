const formlogin = document.querySelectorAll('.form-text input');
const formlabel = document.querySelectorAll('.form-text label');
for (let i = 0; i < 2; i++) {
    formlabel.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    })
    formlogin[i].addEventListener('focus',function(){
        formlabel[i].classList.add('focus')
    })
    formlogin[i].addEventListener('blur',function(){
        if(formlogin[i].value ==""){
        formlabel[i].classList.remove('focus')
    }
    })
}


