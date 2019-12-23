import { combineReducers } from 'redux'

import { colors } from '../components/color-list'
import { batman } from '../components/react-select'

const rootReducer = combineReducers({
    colors,
    batman
})

export default rootReducer