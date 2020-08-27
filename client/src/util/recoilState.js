import {atom} from 'recoil'

export const isAuthenticated = atom({
    key: 'isAuthenticated',
    default:false
});
export const userInfoState=atom({
    key:'userInfoState',
    default:{}
})
export const decodedToken=atom({
    key:'decodedToken',
    default:{}
})