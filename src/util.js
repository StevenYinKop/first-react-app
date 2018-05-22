export function getRedirectPath({ type, avatar }) {
    // user.type  /boss /emp
    // user.avatar  /bossinfo /empinfo
    console.log('getRedirectPath', type, avatar)
    let url = (type == 2) ? '/boss' : '/emp';
    if(!avatar) {
        url += 'info'
    }
    return url
}