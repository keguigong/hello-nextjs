import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  switch (id) {
    case 'first':
      return (
        <>
          <Header />
          <h1>Post: {id}</h1>
          <ul>
            <li>
              <Link href='/post/[id]/[comment]' as={`/post/${id}/first-comment`}>
                <a>First comment</a>
              </Link>
            </li>
            <li>
              <Link href='/post/[id]/[comment]' as={`/post/${id}/second-comment`}>
                <a>Second comment</a>
              </Link>
            </li>
          </ul>
        </>
      )
    case 'second':
      return (
        <>
          <Header />
          <h1>Post: {id}</h1>
          <h1>No links here.</h1>
        </>
      )
    default: 
      return(
        <>
          <Header />
          <h1>Post: {id}</h1>
          <h1>Nothing found.</h1>
        </>
      )
  }
}

export default Post
