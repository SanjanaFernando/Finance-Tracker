
const initialForm = 
	document.getElementById("initial-form");


 
function calculate() {

    var expense = JSON.parse(sessionStorage.getItem("totalExpense"));
    var income=JSON.parse(sessionStorage.getItem("totalIncome"));

   
    
	
   
  var  initialAmount2=JSON.parse(sessionStorage.getItem("initial"));


    

	var remainingAmount = initialAmount2 + income - expense;
	

    console.log("initial "+initialAmount2);
    console.log("r "+remainingAmount);
    console.log("income "+income);
    console.log("exp "+expense);

    document.getElementById('initial-amount-show').textContent ="Rs. "+ initialAmount2.toFixed(2);
    
    document.getElementById('remaining').textContent ="Rs. "+ remainingAmount.toFixed(2);
}

 

function initial (){

    var initialAmount = parseFloat(document.getElementById('initial-amount').value) || 0;
	

    
    sessionStorage.setItem("initial",initialAmount);


}


initialForm.addEventListener('input',function(){

    initial();

    calculate();
});

calculate();

