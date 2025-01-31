
const expenseForm = 
	document.getElementById("expense-form"); 
const expenseList = 
	document.getElementById("expense-list"); 
const totalAmountElement = 
	document.getElementById("total-amount"); 



let expenses = 
	JSON.parse(sessionStorage.getItem("expenses")) || []; 



	

function renderExpenses() { 

	
	expenseList.innerHTML = ""; 

	
	let totalAmount = 0; 

	
	for (let i = 0; i < expenses.length; i++) { 
		const expense = expenses[i]; 
		const expenseRow = document.createElement("tr"); 
		expenseRow.innerHTML = ` 
	<td>${expense.name}</td> 
	<td>Rs.${expense.amount}</td> 
	<td class="delete-btn" data-id="${i}">Delete</td> 
	`; 
		expenseList.appendChild(expenseRow); 

		
		totalAmount += expense.amount; 
	} 

	 
	totalAmountElement.textContent = 
		totalAmount.toFixed(2); 


		
        

        sessionStorage.setItem("totalExpense",JSON.stringify(totalAmount));


	
	sessionStorage.setItem("expenses", 
		JSON.stringify(expenses)); 

		
} 







function addExpense(event) { 
	event.preventDefault(); 

	
	const expenseNameInput = 
		document.getElementById("expense-name"); 
	const expenseAmountInput = 
		document.getElementById("expense-amount"); 
	const expenseName = 
		expenseNameInput.value; 
	const expenseAmount = 
		parseFloat(expenseAmountInput.value); 

	 
	expenseNameInput.value = ""; 
	expenseAmountInput.value = ""; 

	 
	if (expenseName === "" || isNaN(expenseAmount)) { 
		alert("Please enter valid expense details."); 
		return; 
	} 

	 
	const expense = { 
		name: expenseName, 
		amount: expenseAmount, 
	}; 

	
	expenses.push(expense); 

	
	renderExpenses(); 
} 






// Function to delete expense 
function deleteExpense(event) { 
	if (event.target.classList.contains("delete-btn")) { 

		// Get expense index from data-id attribute 
		const expenseIndex = 
			parseInt(event.target.getAttribute("data-id")); 

		// Remove expense from expenses array 
		expenses.splice(expenseIndex, 1); 

		// Render expenses 
		renderExpenses(); 
	} 
} 





// Add event listeners for expenses
expenseForm.addEventListener("submit", addExpense); 
expenseList.addEventListener("click", deleteExpense); 




// Render initial expenses and incomes on page load 
renderExpenses();



