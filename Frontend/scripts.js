document.querySelectorAll('.test-button').forEach(button => {
    button.addEventListener('click', () => {
        const testType = button.classList.contains('security') ? 'security' :
                         button.classList.contains('gui') ? 'gui' :
                         button.classList.contains('performance') ? 'performance' :
                         button.classList.contains('unit') ? 'unit' : '';

        if (testType) {
            fetch(`http://localhost:3000/test/${testType}`)
                .then(response => response.text())
                .then(data => {
                    alert(data);
                    if (testType === 'security') {
                        showSecurityChart();
                    }
                })
                .catch(error => alert('An error occurred: ' + error));
        }
    });
});

function showSecurityChart() {
    const ctx = document.getElementById('securityChart').getContext('2d');
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.style.display = 'block'; // Show the chart container

    const data = {
        labels: ['Red Alerts', 'Orange Alerts', 'No Alerts'],
        datasets: [{
            label: 'Security Testing Results',
            data: [1, 3, 96], // 1 red alert, 3 orange alerts, and the rest (96%) in green
            backgroundColor: ['#d9534f', '#f0ad4e', '#5cb85c'],
            hoverBackgroundColor: ['#c9302c', '#ec971f', '#449d44']
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Security Testing Results'
                }
            }
        },
    };

    new Chart(ctx, config);
}
