import {
    GET_ALL_DOGS,
    FILTER_BY_TEMPERAMENTS,
    GET_ALL_TEMPERAMENTS,
    FILTER_CREATED, ORDER_BY,
    ORDER_BY_WEIGHT,
    GET_NAME_DOGS,
    POST_DOGS
} from '../actions/index';

const initialState = {
    allDogs: [],
    Dogs: [],
    temperament: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            console.log(action.payload);
            return {
                ...state,
                allDogs: action.payload,
                Dogs: action.payload
            }
        case GET_ALL_TEMPERAMENTS:
            console.log(action.payload);
            const filterTemp = action.payload.filter((temp) => temp.name !== "");
            return {
                ...state,
                temperament: filterTemp
            }
        case FILTER_BY_TEMPERAMENTS:
            const totalDogs = state.Dogs;
            const tempFilter = action.payload === 'temp' ? totalDogs : totalDogs.filter((e) => e.temperament ? e.temperament.includes(action.payload) : e.temperaments?.map((e) => e.name));
            console.log(totalDogs);
            console.log(tempFilter);
            return {
                ...state,
                allDogs: tempFilter
            }
        case FILTER_CREATED:
            const totalDogs2 = state.Dogs;
            const createFilter = action.payload === "bds" ? totalDogs2.filter(e => e.createDB) : totalDogs2.filter(e => !e.createDB)
            return {
                ...state,
                allDogs: action.payload === 'all' ? totalDogs2 : createFilter
            }
        case ORDER_BY:
            let orderAsc = action.payload === "asc" ?
                state.allDogs.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.allDogs.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
            return {
                ...state,
                allDogs: orderAsc
            };
        case ORDER_BY_WEIGHT:
            const filterWeight = action.payload === "menormayor" ? state.Dogs.sort((a, b) => {
                if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                    return 1;
                };
                if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                    return -1;
                };
                return 0;
            })
                : state.Dogs.sort((a, b) => {
                    if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                        return -1;
                    };
                    if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                        return 1;
                    };
                    return 0;
                });
            return {
                ...state,
                allDogs: filterWeight,
            };
        case GET_NAME_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }
        case POST_DOGS:
            console.log("**");
            console.log(state);
            return{
                ...state
            }
            default:
            return {
                ...state
            }

    }
}

export default rootReducer;