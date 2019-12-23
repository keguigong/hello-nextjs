export const GET_BATMAN_PENDING = 'GET_BATMAN_PENDING'
export const GET_BATMAN_SUCCESS = 'GET_BATMAN_SUCCESS'
export const GET_BATMAN_ERROR = 'GET_BATMAN_ERROR'

export const getBatmanPending = () => ({
  type: GET_BATMAN_PENDING
})

export const getBatmanSuccess = (payload) => ({
  type: GET_BATMAN_SUCCESS,
  payload: payload
})

export const getBatmanError = (error) => ({
  type: GET_BATMAN_ERROR,
  error: error
})