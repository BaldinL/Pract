// script.js
const cars = [
    { id: 1, name: 'Авто 1', pricePerDay: 500, description: 'Опис авто 1' },
    { id: 2, name: 'Авто 2', pricePerDay: 600, description: 'Опис авто 2' },
    { id: 3, name: 'Авто 3', pricePerDay: 450, description: 'Опис авто 3' },
    { id: 4, name: 'Авто 4', pricePerDay: 700, description: 'Опис авто 4' },
    // Додати ще 4 авто аналогічним чином
];

function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        document.getElementById('details-content').innerHTML = `
            <h3>${car.name}</h3>
            <p>${car.description}</p>
            <p>Ціна за день: ${car.pricePerDay} грн</p>
        `;
        document.getElementById('cars').classList.add('hidden');
        document.getElementById('car-details').classList.remove('hidden');
    }
}

function backToList() {
    document.getElementById('car-details').classList.add('hidden');
    document.getElementById('cars').classList.remove('hidden');
}

function calculateCost(event) {
    event.preventDefault();
    const carId = parseInt(document.getElementById('car-select').value);
    const days = parseInt(document.getElementById('days').value);
    const car = cars.find(c => c.id === carId);
    if (car) {
        const cost = car.pricePerDay * days;
        document.getElementById('cost-result').innerHTML = `Вартість оренди: ${cost} грн`;
    }
}
