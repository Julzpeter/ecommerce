
const product =[
    {
        id: 1,
        image: 'img/EARRINGS2.webp',
        title: 'Earring',
        price: 'Ksh.5',
    },
    {
        id: 2,
        image: 'img/NECKLACE6.png',
        title: 'Necklace',
        price: 'Ksh.5', 
    },
    {
        id: 3,
        image: 'img/BRACELET2.webp',
        title: 'Bracelet',
        price: 'Ksh.5',
    },
    {
        id: 4,
        image: 'img/ANKLET1.webp',
        title: 'Anklet',
        price: 'Ksh.5',
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i =0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>${price}</h2>`+ 
                    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                    `</div>
                    </div>`
                    
            
    )
    }).join('')
    
    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j=0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        
        if (cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+" .00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price}=items;
                total=total+price;
                document.getElementById("total").innerHTML = "Ksh "+total+".00";
                return(
                    `<div class='cart-item'>
                     <div class='row-img'>
                        <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                        "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                        
                );
            }).join('');
        }
    }