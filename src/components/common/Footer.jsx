import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <h2 className='text-3xl font-bold'>Year Function Practice</h2>
      Copyright©{year} (Logo) All Rights Reserved.
    </>
  )
}

export default Footer