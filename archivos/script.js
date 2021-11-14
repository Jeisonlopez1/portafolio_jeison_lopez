const info_metas = document.querySelector('.sobre-mi');
let bloqueActivo;
const botonMenu = document.querySelector('.tongle');

info_metas.addEventListener('click',(e)=>{

    if (bloqueActivo){
        bloqueActivo.classList.remove('active');
    }
    if(e.target.classList.contains('info')){
        let pActivo = e.target.parentNode.parentNode.childNodes[3]
        bloqueActivo = pActivo;
        pActivo.classList.add('active');

    }
})

botonMenu.addEventListener('click',(e)=>{
    botonMenu.classList.toggle('active');
    if(botonMenu.classList.contains('active')){
        document.querySelector('nav').classList.add('active')
    }else{
        document.querySelector('nav').classList.remove('active')
    }
})

window.addEventListener('click',(e)=>{
    if (bloqueActivo && !e.target.classList.contains('info')){
        bloqueActivo.classList.remove('active');
    }
})