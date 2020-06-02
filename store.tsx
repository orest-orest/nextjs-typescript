import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {CREATE_POST, RECIEVE_POSTS_LIST} from "./actions/action-types";
import  ReduxThunk  from 'redux-thunk'


let store: any;

const initialState = {
    postList: []
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case RECIEVE_POSTS_LIST:
            return Object.assign({}, state, {
                postList: action.postList
            });
        case CREATE_POST:
            return{
            ...state,
                postList:  [...state.postList, action.payload],
            };
        default:
            return state;
    }
}

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(ReduxThunk))
    )
}

export const initializeStore = (preloadedState: any) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
};

export function useStore(initialState: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
