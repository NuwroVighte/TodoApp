import axios from 'axios'

class AuthenticationService {
    registerSuccessfulLogin(username,password) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors()
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user===null) return ''
        return user
    }

    setupAxiosInterceptors() {
        let username = 'droberts'
        let password = 'password'

        //the spaces etc. are very particular when appending together an authentication header to standards
        //everything after 'Basic ' needs to be encoded in base64, which is what window.btoa does.  
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();