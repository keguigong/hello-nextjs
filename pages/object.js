import React from 'react'

const obj0 = {
    aaa: 'aaa',
    bbb: 'bbb'
}

const obj1 = {
    aaa: 'aaa',
    bbb: 'bbb'
}

const App = props => (
    <div>
        <p>asdasd</p>
        <p>{obj0.toString() === obj1.toString()  ? "true" : "false"}</p>
    </div>
)

export default App