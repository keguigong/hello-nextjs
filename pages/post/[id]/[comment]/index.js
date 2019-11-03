import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/layout'

const Comment = () => {
    const router = useRouter()
    const { id, comment } = router.query

    return (
        <Layout>
            <h1>/{id}/{comment}</h1>
            <ul>
                <li>
                    <Link href='/post/[id]/[comment]/[detail]' as={`/post/${id}/${comment}/detail-1`}>
                        <a>detail-1</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/[id]/[comment]/[detail]' as={`/post/${id}/${comment}/detail-2`}>
                        <a>detail-2</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    )
}

export default Comment