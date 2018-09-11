var cerrar= document.querySelector('.ver  .close');
var ver= document.querySelector('.ver');
var imgenes = document.querySelectorAll('.img1');
var modal= document.querySelector('.ver');
var modalimg = document.querySelector('.ver img');

    cerrar.addEventListener('click',function(){
        modal.style.display='none';
    })
    imgenes.forEach(imagen => {
        imagen.addEventListener('click',function(){
            ver.style.display='flex';
            modalimg.src=this.src;
        })
        
    });