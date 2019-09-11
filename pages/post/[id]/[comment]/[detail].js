import { useRouter } from 'next/router'
import Header from '../../../../components/header'

const Detail = () => {
  const router = useRouter()
  const { id, comment, detail } = router.query

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
      <h1>Detail: {detail}</h1>
    </>
  )
}

export default Detail