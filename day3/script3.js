var open=document.querySelector('.open');
var close=document.querySelector('.close');
var container=document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));