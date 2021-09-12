import axios from 'axios';

export function fetchStudents(roomId: number) {
    return axios.get(`/rooms/${roomId}/students`)
        .then(function (response) {
            return response.data.students;
        })
        .catch(function (error) {
            return error;
        });
}
