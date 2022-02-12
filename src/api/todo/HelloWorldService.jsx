import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    //remember to take name as a parameter and change '' to `` to get ${name} to work
    executeHelloWorldPathVariableService(name) {
         let username = 'droberts'
         let password = 'password'

        // //the spaces etc. are very particular when appending together an authentication header to standards
        // //everything after 'Basic ' needs to be encoded in base64, which is what window.btoa does.  
         let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        ,
            {
                headers : {
                    authorization: basicAuthHeader
                }
            }
        
        )
    }

}


export default new HelloWorldService()