
	
    const incomeForm = 
    document.getElementById("income-form"); 
    const incomeList = 
    document.getElementById("Income-list"); 
    const totalIncomeAmountElement = 
    document.getElementById("total-income-amount"); 

    
    
let incomes = 
JSON.parse(sessionStorage.getItem("incomes")) || []; 


function renderIncomes() { 

	 
	incomeList.innerHTML = ""; 

	 
	let totalIncomeAmount = 0; 

	 
	for (let i = 0; i < incomes.length; i++) { 
		const income = incomes[i]; 
		const incomeRow = document.createElement("tr"); 
		incomeRow.innerHTML = ` 
	<td>${income.name}</td> 
	<td>Rs.${income.amount}</td> 
	<td class="in-delete-btn" in-data-id="${i}">Delete</td> 
	`; 
		incomeList.appendChild(incomeRow); 

		 
		totalIncomeAmount += income.amount; 
	} 

	
	totalIncomeAmountElement.textContent = 
		totalIncomeAmount.toFixed(2); 

       

        sessionStorage.setItem("totalIncome",JSON.stringify(totalIncomeAmount));

	
	sessionStorage.setItem("incomes", 
		JSON.stringify(incomes)); 

		
} 



function addIncome(event) { 
	event.preventDefault(); 

	
	const incomeNameInput = 
		document.getElementById("income-name"); 
	const incomeAmountInput = 
		document.getElementById("income-amount"); 
	const incomeName = 
	     incomeNameInput.value; 
	const incomeAmount = 
		parseFloat(incomeAmountInput.value); 

	
	incomeNameInput.value = ""; 
	incomeAmountInput.value = ""; 

	 
	if (incomeName === "" || isNaN(incomeAmount)) { 
		alert("Please enter valid income details."); 
		return; 
	} 

	 
	const income = { 
		name: incomeName, 
		amount: incomeAmount, 
	}; 

	
	incomes.push(income); 

	
	renderIncomes(); 
} 

 
function deleteIncomes(event) { 
	if (event.target.classList.contains("in-delete-btn")) { 

		 
		const incomeIndex = 
			parseInt(event.target.getAttribute("in-data-id")); 

		 
		incomes.splice(incomeIndex, 1); 

		
		renderIncomes(); 
	} 
} 



incomeForm.addEventListener("submit", addIncome); 
incomeList.addEventListener("click", deleteIncomes); 



renderIncomes();

