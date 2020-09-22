var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [{
            label: 'Frequência de Funcionários',
            backgroundColor: '#298bf6',
            borderColor: '#298bf6',
            data: [15, 30, 40, 20, 23, 28, 45]
        }]
    },

    // Configuration options go here
    options: {}
});