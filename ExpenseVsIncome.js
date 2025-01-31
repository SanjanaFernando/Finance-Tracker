var myChart; 

function createChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['INCOME', 'EXPENSE'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#36A2EB', '#FF6384'],
            }]
        },
    
    });
}

function updateChart() {
    var expense = JSON.parse(sessionStorage.getItem("totalExpense"));
    var income = JSON.parse(sessionStorage.getItem("totalIncome"));

    console.log("income" + income);
    console.log("expense" + expense);

    myChart.data.datasets[0].data = [income, expense];
    myChart.update();
}


document.addEventListener("DOMContentLoaded", function () {
    createChart();
    updateChart();
});


