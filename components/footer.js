import Link from 'next/link'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/learn-more'>
                    <a>Learn more</a>
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
