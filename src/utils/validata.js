/**
 * params {string} str
 * params {boolean}
*/
export function validUsername(str) {
    let username = ['admin', 'editor']
    let result = username.some(item => {
        return item == str;
    })
    return result
}