const fetch = require('node-fetch')
const deviceId = 'NPC-NIO-a37aa451-5b9c8fd5'
const dataServer = '10.110.93.35'
const testServer = '10.110.18.244'
const port = '8081'

fetch(`http://10.110.93.35:8081/alarms?page_no=1&page_size=5&device_id=PS-NIO-8caf9993-d30c837a&start_time=1560930036606&end_time=1561534836606`)
    .then(res => res.json())
    .then((result) => {
        console.log(result.data.alarm_info_dto_list)
    })