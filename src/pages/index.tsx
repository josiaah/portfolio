import { Fragment } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Josiah Rose - Full-stack Developer </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Introduction" key="title" />
        <link rel="stylesheet" href="	https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css"/>
      </Head>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="text-3xl text-center md:text-left">
          <h1 className="text-5xl text-white hover:text-gray-300 mb-1 font-bold">Josiah Rose</h1>
          <p className="text-gray-200 tracking-tight leading-tight">A full-stack developer based in Canada. Currently studying technologies!</p>
          <br />
          <a href="https://github.com/josiaah" className="bg-gray-600 px-2 py-2 rounded-md text-white mr-2">
          <i className="fab fa-github mr-1" aria-hidden="true"/>
            Github
            </a>
          <a href="https://twitter.com/tweetjosi" className="bg-indigo-400 px-2 py-2 rounded-md text-white">
          <i className="fab fa-twitter mr-1" aria-hidden="true"/>
          Twitter
          </a>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <img src="/profile.png" className="w-64 border border-gray-900 h-64 rounded-lg" />
        </div>
      </div>
    </Fragment>
  )
}
