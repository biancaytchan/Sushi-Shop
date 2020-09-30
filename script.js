let outline = document.getElementById('Outline-input')
let plate = document.getElementById('Sushi-plate')

function printToppings(){

  let toppings = document.getElementsByName('toppings')
  for (var i =0; i<toppings.length; i++){
  if(toppings[i]).checked){
    console.log(toppings[i].value)
    }
  }
}

function onSubmit(){
  let zip = document.getElementById('zip').value
  console.log(zip)
}

if(zip === "666"){
  document.getElementById("zip").style.color = "green";
  }
  else{
    document.getElementById("zip").style.color = "red";
  }