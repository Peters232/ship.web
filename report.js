document.getElementById("mobile-menu").addEventListener("click", function() {

    const navbar = document.getElementById("navbar").querySelector("ul");

    navbar.classList.toggle("active");

});
// Chart.js - Delivery Performance Chart

const ctx = document.getElementById('deliveryChart').getContext('2d');

const deliveryChart = new Chart(ctx, {

    type: 'bar',

    data: {

        labels: ['On Time', 'Delayed', 'In Transit'],

        datasets: [{

            label: 'Delivery Performance',

            data: [85, 10, 5],

            backgroundColor: ['#4caf50', '#ff9800', '#f44336']

        }]

    },

    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true

            }

        },

        plugins: {

            tooltip: {

                enabled: true

            }

        }

    }

});

// DataTables - Setup for Tables

$(document).ready(function () {

    $('#shipmentTable').DataTable({

        responsive: true

    });

    $('#activityTable').DataTable({

        responsive: true

    });

});

// Export Reports - Download Data

document.getElementById('exportBtn').addEventListener('click', function () {

    const data = 'Some Report Data';  // Replace with actual report data

    const blob = new Blob([data], { type: 'text/csv' });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;

    a.download = 'E-Express_Report.csv';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

});