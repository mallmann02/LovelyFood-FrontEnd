import api from '../../services/api';
import { addCars } from '../cars';

export const getAllCars = (productType) => {
    return (dispatch) =>{
        api.get('/products', {
            params: {
                type: productType
            }
        }).then(res => {
            dispatch(addCars(res.data))
        }).catch(() => console.log("ERROR"))
    }
}