import { RoomItem } from "../types";

export const Room = (props: {room: RoomItem }) => {
    const { room } = props;
    return <div>{ room.name }</div>
};