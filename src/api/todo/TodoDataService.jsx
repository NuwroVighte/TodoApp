import axios from 'axios'
import {JPA_API_URL} from '../../Constants'

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo)
    }

    deleteTodo(name, id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService()