import React from 'react'
import { Link } from 'react-router'
const NotFoundPage = () => {
  return (
    <div className="text-center mt-[50px]">
      <h1 className="text-[3em] text-purple-600">404 - Page Not Found</h1>
      <p className="my-[20px] text-[1.2em]">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className='font-bold'>Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage