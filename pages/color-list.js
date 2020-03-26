import { ColorList, addColor } from '../components/color-list'

export default ColorList

ColorList.getInitialProps = ({ store }) => {
  store.dispatch(addColor('#00BEBE', 'Teal'))
}