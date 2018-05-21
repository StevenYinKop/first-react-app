export function getRedirectPath({ type, avatar }) {
    // user.type  /boss /emp
    // user.avatar  /bossinfo /empinfo
    let url = (type === 'boss') ? '/boss' : '/emp';
    if(!avatar) {
        url += 'info'
    }
    return url
}