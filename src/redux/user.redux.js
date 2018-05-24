import axios from 'axios'
import { getRedirectPath } from '../util'

// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'

const initState = {
    // isAuth: false,
    msg: '',
    user: '',
    password: '',
    type: '',
}

export function user(state = initState, action) {
    switch (action.type) {
        // case REGISTER_SUCCESS:
        //     return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        // case LOGIN_SUCCESS: 
        //     return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case AUTH_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload }
        case ERROR_MSG:
            return { ...state, msg: action.msg, isAuth: false }
        case LOAD_DATA:
            return { ...state, ...action.payload }
        case LOGOUT:
            return { ...initState, redirectTo: '/login' }
        default:
            return state;
    }
}

// function loginSuccess(data) {
//     return {type: LOGIN_SUCCESS, payload: data}
// }

// function registerSuccess(data) {
//     return { type: REGISTER_SUCCESS, payload: data }
// }

function authSuccess(obj) {
    const { password, ...data } = obj
    return { type: AUTH_SUCCESS, payload: data }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

function logoutSuccess() {
    return { type: LOGOUT }
}

export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo }
}

export function register({ user, password, confirm, type }) {
    console.log('redux : register', user, password, confirm, type)
    if (!user || !password || !type) {
        console.log('用户名密码必须输入')
        return errorMsg('用户名密码必须输入')
    }
    if (password !== confirm) {
        console.log('两次密码不一致')
        return errorMsg('两次密码不一致')
    }
    return dispatch => {
        axios.post('/user/register', {
            user,
            password,
            type,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                // dispatch(registerSuccess({ user, password, type }))
                dispatch(authSuccess({ user, password, type }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function login({ user, password }) {
    if (!user || !password) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', {
            user,
            password,
        }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                // dispatch(loginSuccess(res.data.data))
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function update(data) {
    return dispatch => axios.post('/user/update', data)
        .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
}

export function logout(data) {
    return logoutSuccess()
}

