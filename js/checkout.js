
const product =[
    {
        image: 'img/ANKLET1.webp',
        title: 'Anklet',
        price: 5
    },
    {
        image: 'img/BRACELET2.webp',
        title: 'Bracelet',
        price: 5
    },
    {
        image: 'img/NECKLACE6.png',
        title: 'Necklace',
        price: 5
    },
    {
        image: 'img/EARRINGS2.webp',
        title: 'Earrings',
        price: 10
    },
]



const categories = [...new Set(product.map((item)=>
    {return item}))];

    function delElement(a){
        categories.splice(a, 1);
        displaycart();
    }

  
function displaycart(c){
    let j=0, total=0;let i=0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";

        document.getElementById("totalA").innerHTML = "Ksh 00.00";
        document.getElementById("totalB").innerHTML = "Ksh 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "Ksh "+ total +".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="Ksh "+(total-c)+".00";
            }else{
                document.getElementById("totalB").innerHTML="Ksh "+total+ ".00";
            }

            return(
                `<tr>
                    <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="360"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:red; '>Ksh ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                    
                `</tr>`
            );
        }).join('');
    }
}
displaycart();
function checkout() {
    // Get the values from the input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zipCode").value;

    // Perform some basic validation
    if (!firstName || !lastName || !address || !city || !zipCode) {
      alert("Please fill in all fields");
      return;
    }

    // Display a success message with the user's information
    var message = "Thank you for your purchase!\n\n";
    message += "Name: " + firstName + " " + lastName + "\n";
    message += "Address: " + address + "\n";
    message += "City: " + city + "\n";
    message += "Zip Code: " + zipCode + "\n";
    alert(message);
  }





