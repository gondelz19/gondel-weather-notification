require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const CITY = 'Hanoi'; // Thay th? b?ng t�n th�nh ph? c?a b?n
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

async function getWeather() {
    try {
        const response = await axios.get(URL);
        const { temp, humidity } = response.data.main;
        const description = response.data.weather[0].description;
        console.log(`Th?i tiet h�m nay o ${CITY}: ${description} v?i nhi?t d? ${temp}�C v� d? am ${humidity}%.`);
    } catch (error) {
        console.error('C� loi xay ra khi lay th�ng tin th?i tiet:', error);
    }
}

getWeather();
