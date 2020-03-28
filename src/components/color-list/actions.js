import { v4 } from 'uuid'

export const ADD_COLOR = 'ADD_COLOR'
export const REMOVE_COLOR = 'REMOVE_COLOR'
export const RATE_COLOR = 'RATE_COLOR'
export const SORT_COLORS = 'SORT_COLORS'

export const addColor = (color, title) => ({
  type: ADD_COLOR,
  id: v4(),
  title,
  color,
  rating: 0,
  timestamp: new Date().getTime()
})

export const removeColor = id => ({
  type: REMOVE_COLOR,
  id
})

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating
})

export const sortColors = sortedBy => (sortedBy === 'rating')
  ? ({
    type: SORT_COLORS,
    sort: 'SORTED_BY_RATING'
  })
  : (sortedBy === 'title')
    ? ({
      type: SORT_COLORS,
      sort: 'SORTED_BY_TITLE'
    })
    : ({
      type: SORT_COLORS,
      sort: 'SORTED_BY_DATE'
    })