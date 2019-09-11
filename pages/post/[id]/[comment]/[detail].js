import { useRouter } from 'next/router'
import Header from '../../../../components/header'
import Layout from '../../../../components/layout'

const Detail = () => {
  const router = useRouter()
  const { id, comment, detail } = router.query

  return (
    <Layout>
      <Header />
      <h1>/{id}/{comment}/{detail}</h1>
    </Layout>
  )
}

export default Detail