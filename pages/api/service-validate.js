import axios from 'axios'
import { getSSOTicketValidate, getSSOService } from '../../common/urls'

export default async (req, res) => {
  const {
    query: { ticket }
  } = req

  var data

  await axios.get(getSSOTicketValidate + '?ticket=' + ticket + '&service=' + getSSOService)
    .then(res => {
      console.log(res.data)
      data = res.data
    })
  res.statusCode = 200
  res.end(data)
}