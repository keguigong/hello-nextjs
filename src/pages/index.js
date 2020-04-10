/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import JSONPretty from 'react-json-pretty'

import { urlManager } from '../utils'

const Home = () => {
  const [userInfo, setUserInfo] = useState({})
  const [aresPath, setAresPath] = useState(null)

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      axios.get('/sso/resources')
        .then(res => res.data)
        .then(res => setUserInfo(res))
        .catch(e => e)
    }
  }, [])

  const handleLogout = () => {
    axios.get('/sso/logout')
      .then(res => res.data)
      .then(res => window.location.href = urlManager.getSSOLogoutUrl())
      .catch(e => e)
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className='grid'>
          <button className='card' onClick={handleLogout}>Log out</button>
        </div>
        {/* <JSONPretty sx={{ overflow: 'auto' }} data={userInfo} /> */}
        <ul>
          {typeof userInfo.list !== 'undefined' ?
            userInfo.list.map((listItem, index) => (
              <li key={index}>
                {listItem.name}
                {typeof listItem.children !== 'undefined' ?
                  <ul>
                    {listItem.children.map((childrenItem, index) => (
                      <li key={index} sx={{ cursor: 'pointer' }}>
                        {childrenItem.name}
                        {childrenItem.url.match(/^\/admin\/*/) ?
                          <button onClick={() => {
                            setAresPath(null)
                            setTimeout(() => setAresPath(childrenItem.url), 1)
                          }}>&gt;</button> :
                          null}
                      </li>
                    ))}
                  </ul> :
                  null
                }
              </li>
            )) :
            null
          }
        </ul>
        {aresPath ?
          <iframe
            src={urlManager.getAresEmbedUrl(aresPath)}
            sx={{
              height: 600,
              width: '100%',
              border: 0
            }} /> :
          null}
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        width: 100%;
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        display: flex;
        justify-content: center,
        align-items: center
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
    </div>)
}

export default Home
