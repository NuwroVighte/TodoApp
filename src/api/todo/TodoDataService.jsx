import axios from 'axios'
import {API_URL} from '../../Constants'

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    createTodo(name, todo) {
        return axios.post(`${API_URL}/users/${name}/todos/`, todo)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)
    }

    deleteTodo(name, id){
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService()