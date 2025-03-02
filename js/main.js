
// color selection

const colors = document.getElementsByClassName('choose-color');


// default color settled
document.getElementById('product-img').src = `./assets/${colors[0].id}.jpg`
colors[0].classList.add('border-5', 'border-purple-700','color-fetch')
// default color settled


for (let color of colors){

    color.addEventListener('click' , function(event){


        for(i = 0;i < colors.length ; i++){

            colors[i].classList.remove('border-5','border-purple-700','color-fetch')

        }

        const id  = event.target.id;
       
        document.getElementById('product-img').src = `./assets/${id}.jpg`
        event.target.classList.add('border-5', 'border-purple-700','color-fetch')
        

      

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
            sizes[i].classList.remove('border', 'border-purple-700' , 'selected-size');
            sizes[i].classList.add('border-gray-200');
        }

        event.target.classList.remove('border-gray-200');
        event.target.classList.add('border' , 'border-purple-700' , 'selected-size');
    })

}


// view checkout 
let cartList = [];
document.getElementById('view-checkout').addEventListener('click',function(){

    
    let quantity = parseInt(document.getElementById('quantity').innerText)
    if(quantity > 0){



        //removing warning
        document.getElementById('quantity-warn').innerHTML = " ";
        //removing warning

       
          
    

        document.getElementById('checkout-quantity').innerText = quantity;


        let productColor  = document.querySelector('.color-fetch').id;

       
        productImage = productColor + '.jpg';

        if(document.querySelector('.selected-size')){

            //removing size warning
            document.getElementById('size-warn').innerHTML = ' ';
            //removing size warning

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

       

    // viewing items 


     const tbody = document.getElementById('cart-items');

     let tr = document.createElement('tr');

    for(let cart of cartList){
     

        tr.innerHTML = `
        <td class="p-4 flex gap-2 rounded-md items-center"><img class="w-[50px] h-[50px]" src="assets/${cart.image}" alt="">${cart.title}</td>
        <td class="p-4">${cart.color}</td>
        <td class="p-4">${cart.size}</td>
        <td class="p-4">${cart.quantity}</td>
        <td class="p-4">$${cart.price}</td>
 `

    }

    tbody.appendChild(tr);


  
    // Showing the Checkout button
    document.getElementById('visible-card').classList.remove('hidden');
    // Showing the Checkout button
    
    
  }else{
   
   document.getElementById('size-warn').innerHTML = `<p  class="text-yellow-700 bg-yellow-100 p-2 rounded-sm">Select a size to add to cart !!! </p>`


  }

    
    }else {

        document.getElementById('quantity-warn').innerHTML = `<p  class="text-red-700 bg-red-100 p-2 rounded-sm">You must need to select any item to add to cart !!! </p>`

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
document.getElementById('continue-shopping').addEventListener('click',function(){
    document.getElementById('popup').classList.add('hidden');
    document.querySelector('body').classList.remove('fixed');
    document.querySelector('body').classList.remove('w-full');
})
