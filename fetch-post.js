const fetch = require('isomorphic-unfetch')

fetch(`http://akali.nioint.com/get_data/`, {
    method: 'POST',
    body: JSON.stringify({
        load_type: 2,
        num: 4
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));