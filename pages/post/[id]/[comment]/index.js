import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../../components/header'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
      <ul>
        <li>
          <Link href='/post/[id]/[comment]/[detail]' as={`/post/${id}/${comment}/detail-first`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href='/post/[id]/[comment]/[detail]' as={`/post/${id}/${comment}/detail-second`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Comment