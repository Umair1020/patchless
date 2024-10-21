import React from 'react'
import Head from './components/Head'
import Footer from './components/Footer'

const Blog = () => {
  return (
    <div>
        <Head />
        <h2 class="mb-2 mt-2 text-center  " style={{ color: "#FF2424", fontSize: "50px", }}>
               Blog
            </h2>
            <Footer />
    </div>
  )
}

export default Blog