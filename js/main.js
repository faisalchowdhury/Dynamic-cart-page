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

// Quantity Update

document.getElementById('plus').addEventListener('click',function(){
    
    const oldQuantity = parseInt(document.getElementById('quantity').innerText);

    document.getElementById('quantity').innerText = oldQuantity + 1;


});

document.getElementById('less').addEventListener('click',function(){
    
    const oldQuantity = parseInt(document.getElementById('quantity').innerText);

   if(oldQuantity > 0){
    document.getElementById('quantity').innerText = oldQuantity - 1;
   }


});


//Size selection

const sizes = document.querySelectorAll('#size');

for(let size of sizes){
    
    size.addEventListener('click' , function(event){


        for(let i = 0 ;i < sizes.length; i++){
            sizes[i].classList.remove('border-black');
            sizes[i].classList.add('border-gray-200');
        }

        event.target.classList.remove('border-gray-200');
        event.target.classList.add('border-black');
    })

}