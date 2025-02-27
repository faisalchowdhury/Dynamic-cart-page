// popup
document.getElementById('visible-card').addEventListener('click',function(){
    document.getElementById('popup').classList.remove('hidden');
    document.querySelector('body').classList.add('overflow-hidden');
})
document.getElementById('close-popup').addEventListener('click',function(){
    document.getElementById('popup').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
})

// color selection

const colors = document.getElementsByClassName('choose-color');


for (let color of colors){

    color.addEventListener('click' , function(event){


        for(i = 0;i < colors.length ; i++){

            colors[i].classList.remove('border-5')

        }
    
        event.target.classList.add('border-5')

    })

}