
// color selection

const colors = document.getElementsByClassName('choose-color');


for (let color of colors){

    color.addEventListener('click' , function(event){


        for(i = 0;i < colors.length ; i++){

            colors[i].classList.remove('border-5','color-fetch')

        }

        const id  = event.target.id;
       
        document.getElementById('product-img').src = `./assets/${id}.jpg`
        event.target.classList.add('border-5','color-fetch')
        
      

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
            sizes[i].classList.remove('border-black', 'selected-size');
            sizes[i].classList.add('border-gray-200');
        }

        event.target.classList.remove('border-gray-200');
        event.target.classList.add('border-black' , 'selected-size');
    })

}


// view checkout 
let cartList = [];
document.getElementById('view-checkout').addEventListener('click',function(){

    
    let quantity = parseInt(document.getElementById('quantity').innerText)
    if(quantity > 0){
        document.getElementById('visible-card').classList.remove('hidden');

        document.getElementById('checkout-quantity').innerText = quantity;


        let productColor  = document.querySelector('.color-fetch').id;

        productImage = productColor + '.jpg';

        let priceSize =  document.querySelector('.selected-size').innerText;
        let price = parseFloat(priceSize.split('-')[1].split('$')[1])
        let size = priceSize.split('-')[0];

        
        cartList.push({
            image : productImage,
            title : 'Summer trendy Fotua for men',
            color : productColor,
            size : size,
            quantity : quantity,
            price : quantity * price ,
        });

         console.log(cartList);

        



        
    }



    
});



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
