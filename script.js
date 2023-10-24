const button = document.querySelector("button");
button.addEventListener("click", createResult);

const type = {
    "adult" : 350,
    "student" : 350,
    "retired" : 100,
    "animal" : 50,
}


function createResult(){
    const quantity = document.querySelector(".myContainer div input");
    const ticketType = document.querySelector(".myContainer div:nth-child(2) select");
    const result  = document.querySelector(".myContainer div:nth-child(3) input");
    let discount;
    /*
    if (ticketType.value === "adult"){
        result.value = `${quantity.value*350} Ft`;
        
    }
    else{
        result.value = `${quantity.value*175} Ft`;
    }
    */
   /*Ternary operator*/
   discount = quantity.value >= 10 ? 0.9: 1;
    /*    result.value = ticketType.value === "adult" ? `${quantity.value*350*discount} Ft`:
    `${quantity.value * 175*discount} Ft`
    */
   if(ticketType.value === 'animal' && quantity.value > 1){
    quantity.value = 1;

    discount = 1;
    alert("túl sok állatot akarsz magaddal vinni")
    }
    // amikor több állatot irnánk be akkor a quantity.value értéke üres sztring lesz.
    //mégis működik a szotzás itt lenn is Mert "" --> 0 lesz! implicite konverzio
    result.value = quantity.value * discount * type[ticketType.value];
    
}