import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)
}
export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`)
}
function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}
