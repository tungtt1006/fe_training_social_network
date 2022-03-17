export default {
    jwt: localStorage.getItem('jwt') ? ('Bearer ' + localStorage.getItem('jwt')) : ''
}
