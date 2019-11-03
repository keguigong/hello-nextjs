import Link from 'next/link'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <Link href='/'>
                    <a>about</a>
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <a>learn more</a>
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
    </footer>
)

export default Footer
