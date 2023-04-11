import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS'
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY = 'ORDER_BY';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const POST_DOGS = 'POST_DOGS,'
export const GET_DETAIL = 'GET_DETAIL';


export function getAllDogs() {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs`);
            return dispatch({
                type: GET_ALL_DOGS,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getNameDogs = (name) => {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({
                type: GET_NAME_DOGS,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getAllTemperaments = () => {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/temperaments`);
            return dispatch({
                type: GET_ALL_TEMPERAMENTS,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postDogs = (payload) => {
    return async function (dispatch) {
        try {
            var json = await axios.post(`http://localhost:3001/dog`, payload)
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterTemperaments = (payload) => {
    console.log(payload);
    try {
        return {
            type: FILTER_BY_TEMPERAMENTS,
            payload
        }
    } catch (error) {
        console.log(error.message);
    }

}

export const filterCreated = (payload) => {
    try {
        return {
            type: FILTER_CREATED,
            payload
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const orderBy = (payload) => {
    try {
        return {
            type: ORDER_BY,
            payload
        }
    } catch (error) {
        console.log(error.message);
    }
}

export function orderByWeight(payload) {
    try {
        return {
            type: ORDER_BY_WEIGHT,
            payload
        };
    } catch (error) {
        console.log(error.message);
    }

};

export function getDetail(id) {
    return async function(dispatch){
        try {
                var json = await axios.get(`http://localhost:3001/dogs/${id}`);
                return dispatch({
                    type: GET_DETAIL,
                    payload: json.data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
}