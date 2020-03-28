import axios from 'axios'
import { ssoValidateURL, serviceURL } from '../../common/urls'

export default async (req, res) => {
  const {
    query: { ticket }
  } = req

  var data

  await axios.get(ssoValidateURL + '?ticket=' + ticket + '&service=' + serviceURL)
    .then(res => {
      console.log(res.data)
      data = res.data
    })
  res.statusCode = 200
  res.send(data)
}