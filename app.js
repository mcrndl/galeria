var cerrar= document.querySelector('.ver.close');
var ver= document.querySelector('.ver');
var imgenes = document.querySelectorAll('.img1:hover');
var modalimg = document.querySelector('.ver img');

    cerrar.addEventListener('clik',function(){
        modal.style.display='none';
    })
    imagenes.forEach(imagen => {
        imagenes.addEventListener('clik',function(){
            ver.style.display='flex';
            modalimg,src=this.querySelector('img').src;
        })
        
    });