import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Layout>
            <h1>/{id}</h1>
            <ul>
                <li>
                    <Link href='/post/[id]/[comment]' as={`/post/${id}/comment-1`}>
                        <a>comment-1</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/[id]/[comment]' as={`/post/${id}/comment-2`}>
                        <a>comment-2</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Post
