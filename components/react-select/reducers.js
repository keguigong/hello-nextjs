import {
  GET_BATMAN_PENDING,
  GET_BATMAN_SUCCESS,
  GET_BATMAN_ERROR
} from './actions'

const initialState = {
  pending: false,
  error: null,
  payload: []
}

export const batman = (state = initialState, action) => {
  switch (action.type) {
    case GET_BATMAN_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_BATMAN_SUCCESS:
      return {
        ...state,
        pending: false,
        payload: action.payload
      }
    case GET_BATMAN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}