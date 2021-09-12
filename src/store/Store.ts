import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';
import { IStudent, IRoom } from 'models';
import {
  fetchStudents,
  fetchRooms,
} from 'api';

// STATE
export interface StoreState {
  isStudentsLoading: boolean;
  isRoomsLoading: boolean;
  listStudent: IStudent[];
  listRoom: IRoom[];
  currentRoomId: number;
}

const unloadedState: StoreState = {
  isStudentsLoading: false,
  isRoomsLoading: false,
  listStudent: [],
  listRoom: [],
  currentRoomId: 0,
};

// ACTIONS
interface RequestListStudentAction {
  type: 'REQUEST_LIST_STUDENT_DATA';
}

interface ReceiveListStudentAction {
  type: 'RECEIVE_LIST_STUDENT_DATA';
  listStudent: IStudent[];
  currentRoomId: number
}

interface RequestListRoomAction {
  type: 'REQUEST_LIST_ROOM_DATA';
}

interface ReceiveListRoomAction {
  type: 'RECEIVE_LIST_ROOM_DATA';
  listRoom: IRoom[];
}

type KnownAction =
  RequestListStudentAction | ReceiveListStudentAction |
  RequestListRoomAction | ReceiveListRoomAction;

// ACTION CREATORS
export const actionCreators = {
  requestRooms: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    const appState = getState();
    if (appState && appState.Store && !appState.Store.isRoomsLoading) {
      dispatch({ type: 'REQUEST_LIST_ROOM_DATA' });

      let rooms: any = fetchRooms().then((res: IRoom[]) => {
        dispatch({ type: 'RECEIVE_LIST_ROOM_DATA', listRoom: res });

      });

    }
  },
  requestStudentsByRoom: (roomID: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
    const appState = getState();
    if (appState && appState.Store && !appState.Store.isStudentsLoading) {
      dispatch({ type: 'REQUEST_LIST_STUDENT_DATA' });

      // can't make my type -.-
      fetchStudents(roomID).then((res: IStudent[]) => {
        dispatch({ type: 'RECEIVE_LIST_STUDENT_DATA', listStudent: res, currentRoomId: roomID });
      });
    }
  },
};

// REDUCER
export const reducer: Reducer<StoreState> = (state: StoreState | undefined, incomingAction: Action): StoreState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case 'REQUEST_LIST_STUDENT_DATA':
      return {
        ...state,
        isStudentsLoading: true,
      };

    case 'RECEIVE_LIST_STUDENT_DATA':
      return {
        ...state,
        listStudent: action.listStudent,
        isStudentsLoading: false,
        currentRoomId: action.currentRoomId,
      };

    case 'REQUEST_LIST_ROOM_DATA':
      return {
        ...state,
        isRoomsLoading: true,
      };

    case 'RECEIVE_LIST_ROOM_DATA':
      return {
        ...state,
        listRoom: action.listRoom,
        isRoomsLoading: false,
      };

    default:
      return state;
  }

};
