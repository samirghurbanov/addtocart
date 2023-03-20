import React from 'react'
import '../../Styles/footer.css'
const Footer = () => {
  return (
   
    <section className='footer '>
    <div>
    <i style={{fontSize: '25px'}}  class="fa-brands fa-facebook "></i>
    <i style={{fontSize: '25px'}}  class="fa-brands fa-twitter mx-3"></i>
    <i style={{fontSize: '25px'}} class="fa-brands fa-instagram"></i>
    </div>
    <p><a className='email' href="mailto:info@mysite.com">info@mysite.com</a></p>
    <span className='span'>© 2035 by Bijou. Powered and secured by Wix</span>
  </section>
  )
}

export default Footer
