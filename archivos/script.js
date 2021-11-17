const info_metas = document.querySelector('.sobre-mi');
let bloqueActivo;
const botonMenu = document.querySelector('.tongle');
const botonInstrucciones = document.querySelector('#boton-instrucciones');

if(info_metas){

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

    window.addEventListener('click',(e)=>{
        if (bloqueActivo && !e.target.classList.contains('info')){
            bloqueActivo.classList.remove('active');
        }
    })
}

if(botonMenu){

    botonMenu.addEventListener('click',(e)=>{
        botonMenu.classList.toggle('active');
        if(botonMenu.classList.contains('active')){
            document.querySelector('nav').classList.add('active')
        }else{
            document.querySelector('nav').classList.remove('active')
        }
    })
}

if(botonInstrucciones){
    botonInstrucciones.addEventListener('click',(e) =>{
        document.querySelector('.instrucciones').classList.toggle('active')
    })
}