import axios from 'axios'
import { setItems } from '../redux/goods-reducer'

export const fetchGoods = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/Zhan1313/data-table-for-test/db')
            dispatch(setItems(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}