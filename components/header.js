import Link from 'next/link'

const Header = () => (
    <header>
        <ul>
            <li>
                <Link href='/'>
                    <a>home</a>
                </Link>
            </li>
            <li>
                <Link href='/post/[id]' as='/post/post-1'>
                    <a>post-1</a>
                </Link>
            </li>
            <li>
                <Link href='/post/[id]' as='/post/post-2'>
                    <a>post-2</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
            }

            li {
                margin-right: 10px
            }
        `}</style>
    </header>
)

export default Header
