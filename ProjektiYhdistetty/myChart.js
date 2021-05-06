'use strict';
var currentChart;


document.getElementById('renderBtn').addEventListener('click', fetchData);

// estää sivun ylimääräiset päivitykset
function validate(event){
    event.preventDefault();
}

async function fetchData() {
    var countryCode = document.getElementById('country').value;
    const indicatorCode = 'SP.POP.TOTL';
    const baseUrl = 'https://api.worldbank.org/v2/country/';
    const url = baseUrl + countryCode + '/indicator/' + indicatorCode + '?format=json';
    console.log('Fetching data from URL: ' + url);

    var response = await fetch(url);

    if (response.status === 200) {
        var fetchedData = await response.json();
        console.log("fetched: ");
        console.log(fetchedData);

        // testataan löytyykö annettu koodi apista, jos ei alert. Lisätty myös taulukon tuhoaminen tähän.
        // else lauseeseen siirretty loppu aikaisemmasta if lauseesta.
        if (fetchedData[1] === undefined) {
            destroyChart();
            setTimeout(()=> alert("Invalid country code"), 500);
        } else {
            var data = getValues(fetchedData);
            var labels = getLabels(fetchedData);
            var countryName = getCountryName(fetchedData);
            renderChart(data, labels, countryName);
        }
    }
}

function getValues(data) {
    var vals = data[1].sort((a, b) => a.date - b.date).map(item => item.value);
    return vals;
}

function getLabels(data) {
    var labels = data[1].sort((a, b) => a.date - b.date).map(item => item.date);
    return labels;
}

function getCountryName(data) {
    var countryName = data[1][0].country.value;
    return countryName;
}

function destroyChart() {
    if (currentChart) {
        // Clear the previous chart if it exists
        currentChart.destroy();
    }
}

function renderChart(data, labels, countryName) {
    var ctx = document.getElementById('myChart').getContext('2d');
    destroyChart();
    // Draw new chart
    currentChart = new Chart(ctx, {
        type: 'line',
        //type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Population, ' + countryName,
                data: data,
                bordercolor: 'rgba(100, 50, 67, 1)',
               //borderColor: 'rgba(103, 107, 151, 1)',
                 //borderColor: 'rgba(75, 192, 192, 1)',
                //backgroundColor: 'rgba(239, 121, 138, 0.2)',
                //backgroundColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
            }]
        },
        options: {
            animation: {
                duration: 10000
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}