const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
const REMEMBER_KEY = 'REMEMBER'

export function rememberUser(username: string, password: string, remember: boolean) {
    localStorage.setItem(USERNAME_KEY, username)
    localStorage.setItem(PASSWORD_KEY, password)
    localStorage.setItem(REMEMBER_KEY, String(remember))
}

export function deleteUser() {
    localStorage.removeItem(USERNAME_KEY)
    localStorage.removeItem(PASSWORD_KEY)
    localStorage.removeItem(REMEMBER_KEY)
}

export function getUser() {
    return {
        username: localStorage.getItem(USERNAME_KEY),
        password: localStorage.getItem(PASSWORD_KEY),
        remember: Boolean(localStorage.getItem(REMEMBER_KEY))
    }
}
