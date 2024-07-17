const cars = [
    { id: 1, name: 'Авто 1', pricePerDay: 500, description: 'Автомобіль середнього класу, який належить до сегмента D за європейською класифікацією. Цей автомобіль пропонує комфортне водіння, високу якість збірки та широкий вибір двигунів.' },
    { id: 2, name: 'Авто 2', pricePerDay: 600, description: 'Сучасний електричний автомобіль з акумулятором на 64 кВт·год. Він має стильний дизайн з аеродинамічними лініями та сучасними світлодіодними фарами. Салон просторий, з високоякісними матеріалами і численними технологічними нововведеннями, такими як великий сенсорний дисплей інформаційно-розважальної системи, підтримка Apple CarPlay та Android Auto, а також бездротова зарядка для смартфонів' },
    { id: 3, name: 'Авто 3', pricePerDay: 450, description: `Електричний хетчбек, розроблений для міського використання. Автомобіль має компактний, але стильний дизайн з плавними лініями та сучасними LED фарами. Салон добре організований, з високоякісними матеріалами і зручними сидіннями. Інтер'єр оснащений цифровою панеллю приладів та великим сенсорним екраном для інформаційно-розважальної системи, яка підтримує сучасні технології підключення.` },
    { id: 4, name: 'Авто 4', pricePerDay: 700, description: 'компактний кросовер, відомий своїм якісним німецьким дизайном і надійністю. Зовнішній вигляд автомобіля відрізняється стриманим і сучасним дизайном з характерною для Volkswagen решіткою радіатора та чистими лініями кузова.' },

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
