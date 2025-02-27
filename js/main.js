// popup
document.getElementById('visible-card').addEventListener('click',function(){
    document.getElementById('popup').classList.remove('hidden');
    document.querySelector('body').classList.add('fixed');
    document.querySelector('body').classList.add('w-full');
})
document.getElementById('close-popup').addEventListener('click',function(){
    document.getElementById('popup').classList.add('hidden');
    document.querySelector('body').classList.remove('fixed');
    document.querySelector('body').classList.remove('w-full');
})

// color selection

const colors = document.getElementsByClassName('choose-color');


for (let color of colors){

    color.addEventListener('click' , function(event){


        for(i = 0;i < colors.length ; i++){

            colors[i].classList.remove('border-5')

        }

        const id  = event.target.id;
       
        document.getElementById('product-img').src = `./assets/${id}.jpg`
        event.target.classList.add('border-5')
        
      

    })

}