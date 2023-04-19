import React from 'react'
import Link from 'react-router-dom'

const BottomContainer = () => {
  return (
    <div className="bottom-container">
      <Link className="footer-link" to="">LinkedIn</Link>
      <Link className="footer-link" to="">Twitter</Link>
      <Link className="footer-link" to="">Website</Link>
      <p className="copyright">© 2023 All rights reserved.</p>
    </div>
  )
}

export default BottomContainer