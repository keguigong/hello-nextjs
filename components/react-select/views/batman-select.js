import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux'

import getBatman from '../get-batman'

const BatmanSelect = ({
  options,
  getBatman
}) => {
  return <React.Fragment>
    <Select
      isMulti
      options={options}
      clearable
      onChange={e => console.log(e)}
    />
    <button onClick={() => getBatman()}>GET BATMAN</button>
  </React.Fragment>
}

const mapStateToProps = state => ({
  options: state.batman.payload.map(item => ({
    value: item.id,
    label: item.name
  }))
})

const mapDispatchToProps = {
  getBatman: getBatman
}

export default connect(mapStateToProps, mapDispatchToProps)(BatmanSelect)