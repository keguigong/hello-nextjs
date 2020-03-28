/** @jsx jsx */
import { jsx } from 'theme-ui'
import { connect } from 'react-redux'
import { spring, TransitionMotion } from 'react-motion'

import { addColor, removeColor } from '../'

const willEnter = () => {
  return {
    height: 0,
    opacity: 0
  }
}

const willLeave = () => {
  return {
    height: spring(0),
    opacity: spring(0)
  }
}

const getStyles = (colors) => {
  return colors.map((item, index) => {
    return {
      key: index.toString(),
      data: item,
      style: {
        height: spring(80),
        opacity: spring(1)
      }
    }
  })
}

const getDefaultStyles = (colors) => {
  return colors.map((item, index) => {
    return {
      key: index.toString(),
      data: item,
      style: {
        height: 0,
        opacity: 0
      }
    }
  })
}

const ColorList = ({
  colors,
  onRemove,
  addColor
}) => {
  const styles = getStyles(colors)
  const defaultStyles = getDefaultStyles(colors)

  return (
    <div>
      <TransitionMotion
        willLeave={willLeave}
        willEnter={willEnter}
        styles={styles}
        defaultStyles={defaultStyles}
      >
        {interpolatedStyles => <ul sx={{ listStyle: 'none', pl: 0 }}>
          {interpolatedStyles.map(config => {
            const { data, style, key } = config
            return <li
              key={key}
              sx={{
                backgroundColor: data.color,
                px: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...style
              }}>
              {data.color}
              <button onClick={() => onRemove(data.id)}>x</button>
            </li>
          })}
        </ul>}
      </TransitionMotion>
      <button onClick={() => addColor(getRandomColor())}>ADD COLOR</button>
    </div>
  )
}

const mapStateToProps = state => ({
  colors: [...state.colors]
})

const mapDispatchToProps = dispatch => ({
  onRemove(id) {
    dispatch(removeColor(id))
  },
  addColor(color) {
    dispatch(addColor(color))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList)

const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}