// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
                }]
            },
    options: {
        scales: {
        y: {
        beginAtZero: true
                    }
                }
            }
        });

var radialGradient = new ApexCharts(document.querySelector("#radialGradient"), radialGradientOptions);

radialGradient.render();


const navLinks = document.querySelectorAll('.mynav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});