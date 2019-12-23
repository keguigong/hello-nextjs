import fetch from 'isomorphic-unfetch'
import {
  getBatmanPending,
  getBatmanSuccess,
  getBatmanError
} from './actions'

//for abort multi repeated request
let nextSeqId = 0

const getBasicInfo = (deviceId) => {
  return (dispatch, getState) => {
    const seqId = ++nextSeqId
    const dispatchIfValid = (action) => {
      if (seqId === nextSeqId) {
        return dispatch(action)
      }
    }

    let url = 'https://api.tvmaze.com/search/shows?q=batman'

    dispatchIfValid(getBatmanPending())
    fetch(url)
      .then(res => {
        if (!res.ok)
          throw res
        return res.json()
      })
      .then(res => {
        dispatchIfValid(getBatmanSuccess(res.map(show => ({
          id: show.show.id,
          score: show.score,
          url: show.show.url,
          name: show.show.name
        }))))
      })
      .catch(error => {
        dispatchIfValid(getBatmanError(error.message))
      })
  }
}

export default getBasicInfo