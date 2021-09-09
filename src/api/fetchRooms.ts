import axios from 'axios';

export function fetchRooms() {
    return axios.get('/rooms')
        .then(function (response) {
            return response.data.rooms;
        })
        .catch(function (error) {
            return error;
        });
}
