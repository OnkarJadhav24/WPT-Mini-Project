import React from 'react'
import onkar from '../assets/images/onkar.jpeg'
import aditi from '../assets/images/aditi.jpeg'
import saurabh from '../assets/images/saurabh.jpeg'

const ContactUs = () => {
  return (
    <>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }} className="container mt-3">
      <h2 style={{ textAlign: 'center', color: '#fff' }}>Contact Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap' }} className="main-content">
        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          margin: '20px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '30%',
          boxSizing: 'border-box',
          textAlign: 'center',
          color: '#333'
        }} className="card">
          <img
            src={onkar}
            alt="Onkar Vijay Jadhav"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px'
            }}
          />
          <h3>Onkar Vijay Jadhav</h3>
          <p>Contact: +919527750339</p>
          <p>Email: onkarjadhav246200@gmail.com</p>
        </div>
        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          margin: '20px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '30%',
          boxSizing: 'border-box',
          textAlign: 'center',
          color: '#333'
        }} className="card">
          <img
            src={aditi}
            alt="Aditi Chandrashekhar Hedau"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px'
            }}
          />
          <h3>Aditi Chandrashekhar Hedau</h3>
          <p>Contact: +919167765758</p>
          <p>Email: aditi.hedau303@gmail.com</p>
        </div>
        <div style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          margin: '20px',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          width: '30%',
          boxSizing: 'border-box',
          textAlign: 'center',
          color: '#333'
        }} className="card">
          <img
            src={saurabh}
            alt="Saurabh Abhimanyu yadav"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto 20px'
            }}
          />
          <h3>Saurabh Abhimanyu yadav</h3>
          <p>Contact: +917709790968</p>
          <p>Email: yadavsaurabh101@gmail.com</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default ContactUs