const axios = require('axios');
const { Temperament } = require('../db');
const { YOUR_API_KEY } = process.env;

const getTemperament = async () => {
    try {
        const TempApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        const tempInfo = await TempApi.data.map((e) => e.temperament);
        const temps = tempInfo.toString().split(",");

        temps.forEach(async (e) => {
            await Temperament.findOrCreate({
                where: {name: e}
            });
        });

        const allTemp = Temperament.findAll();
        return allTemp;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTemperament,
};