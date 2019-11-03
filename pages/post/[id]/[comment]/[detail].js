import { useRouter } from 'next/router'
import Layout from '../../../../components/layout'

const Detail = () => {
  const router = useRouter()
  const { id, comment, detail } = router.query

  return (
    <Layout>
      <h1>/{id}/{comment}/{detail}</h1>
    </Layout>
  )
}

export default Detail