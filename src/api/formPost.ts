import axios from 'axios';
import { IValues } from 'models';

export function formPost(action: string, body: IValues) {
    let roomId: string = body['roomId']!
    return axios.post(`/rooms/${roomId}/students`, body)
        .then(function (response) {
            return true;
        })
        .catch(function (error) {
            return false;
        });
}
