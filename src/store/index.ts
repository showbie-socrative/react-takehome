import * as Store from './Store';

export interface ApplicationState {
  Store: Store.StoreState | undefined;
}

export const reducers = {
  Store: Store.reducer,
}

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

export type StoreProps =
  Store.StoreState &
  typeof Store.actionCreators;
