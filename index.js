console.log("Hello World!")

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
dateElement.innerHTML = currentDate;

let dataOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);


const url = "https://fakestoreapi.com/products"
const options = {  
};
fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data);

    /*
     let products = [
            {
            title:"Lipstick",
            price: 299.00,
            description: "matte",
            category: "Beauty Product",
            image: null,
            rating: {
                rate: 5,
                count: 200
            },
            
                title:"Lipstick",
                price: 299.00,
                description: "light matte",
                category: "Beauty Product",
                image: null,
                rating: {
                    rate: 5,
                    count: 200
                }
        }

    ];
    console.log(products);
    console.log(products[0].title);
    console.log(products[0].price);
    console.log(products[0].rating.rate);
     */

    let titles = data.map(object => {
        console.log(object);
        console.log(object.title);
        return object.title;

    });

    console.log(titles);

    let ratings = data.map(object => {
        console.log(object);
        console.log(object.ratings);
        return object.rating.rate;
    
    });

    console.log(ratings);

    const myChart = document.getElementById("myChart");

    let barChart = new Chart(myChart, {
        type: 'bar',
        data:{
            labels: titles,
            datasets: [{
                label: 'Ratings of Products',
                data: ratings,
                borderWidth: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 86)',
                    'rgb(255, 192, 192)',
                    'rgb(255, 99, 235)',
                    'rgb(255, 203, 132)',
                    'rgb(255, 99, 132)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ]
        }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    
    });
})