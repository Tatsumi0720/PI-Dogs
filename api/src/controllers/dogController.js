const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Dog, Temperament } = require('../db');

const getApiInfo = async () => {
    try {
        const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        const apiDog = await apiUrl.data.map((e) => {

            let tempArray = [];
            if (e.temperament) {//pregunto que exista el temperamento y lo devuelvo en un arreglo
                tempArray = e.temperament.split(", ");
            }
            
            let heightArray = [];
            if (e.height.metric) {
                heightArray = e.height.metric.split(" - ");
            }
        
            let weightArray = [];
            if (e.weight.metric) {
                weightArray = e.weight.metric.split(" - ");
            }

            return {
                id: e.id,
                name: e.name,
                life_span: e.life_span,
                temperament: tempArray,
                weight: weightArray,
                height: heightArray,
                image: e.image.url,
            };
        });
        return apiDog;
    } catch (error) {
        console.log(error);
    }
};

const getInfoDb = async () => {
    const DogDB = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    return DogDB;
};

const getAllDog = async () => {
    const getApi = await getApiInfo();
    const getDb = await getInfoDb();
    // const infoAll = getApi.concat(getDb);
    const infoAll = [...getApi, ...getDb];
    return infoAll;
};

module.exports = {
    getAllDog,
};