import FreeTrial from '@/Components/FreeTrial'
import React from 'react'
import Header from '@/Components/Header'
import NoSSR from 'react-no-ssr'

const GetFreeTrial = () => {
  return (
    <div>
      <NoSSR>
      <Header/>
      <FreeTrial/>
      </NoSSR>
    </div>
  )
}

export default GetFreeTrial
