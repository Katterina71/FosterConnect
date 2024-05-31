import React from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'

export default function Layout({children}) {
  return (
    <div>
       <Header />
            {children}
      <Footer />
    </div>
  )
}
