// Nav toggle
const nav = document.querySelector('nav');
const navToggleBtn = document.querySelector('.menu-toggle');

navToggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
})


// Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Hours per week',
            data: [7, 5, 1, 15, 22, 7],
            backgroundColor: [
                'rgba(51,51,51, 1)',
                'rgba(51,51,51, 1)',
                'rgba(51,51,51, 1)',
                'rgba(51,51,51, 1)',
                'rgba(51,51,51, 1)',
                'rgba(51,51,51, 1)',
            ],
            borderColor: [
                'rgba(251,251,251, 0.7)',
                'rgba(251,251,251, 0.7)',
                'rgba(251,251,251, 0.7)',
                'rgba(251,251,251, 0.7)',
                'rgba(251,251,251, 0.7)',
                'rgba(251,251,251, 0.7)'
            ],
            borderWidth: 1.5,
            tension: 0.2,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },

    }
});