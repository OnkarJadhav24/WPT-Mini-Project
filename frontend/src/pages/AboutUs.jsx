import React from 'react'

const About = () => {
  return <>
  <div>
 
</div>
<div class="container mt-3">
 <div class="main-content">
     <div className="card">
         <div className="card-body">
         <div className="card-title">
          <h3 className="text-center">Project Title: Tour Management Web Application</h3>
         </div>
         <h5>Project Overview :</h5>
         <p>The Tour Management Web Application is a comprehensive platform designed to streamline the management of tours and travel activities.
           It aims to provide users with an efficient and user-friendly interface for planning, booking, and managing tours. 
           The system caters to both customers and administrators, offering features such as tour browsing, booking, user 
           authentication, and administrative control over tour listings and customer data.</p>
         <h5>Key Features :</h5>
         <p>Tour Pages: The web application includes visually appealing tour pages that showcase various tour packages, destinations, itineraries, and pricing details. Users can browse through available tours and explore different options based on their preferences.</p>

          <p>User Authentication: To access advanced features such as booking tours and viewing personalized recommendations, users are required to sign in or create an account. The authentication system ensures the security of user data and enables personalized experiences.</p>

          <p>Booking Functionality: Users can book tours directly through the web application by selecting their desired package, specifying travel dates, and providing necessary details such as passenger information and payment details. The booking process is intuitive and guides users through each step.</p>

          <p>CRUD Operations: The backend of the application supports CRUD (Create, Read, Update, Delete) operations for managing tour data and customer information. This includes functionalities such as adding new tours, editing tour details, deleting outdated listings, and viewing customer bookings.</p>

          <p>Data Fetching: Efficient data fetching mechanisms are implemented to retrieve customer data and tour information from the backend database. This ensures that the web application responds quickly to user queries and delivers up-to-date information.</p>

          <h5>Technologies Used :</h5>
          <p>Frontend: HTML, CSS, JavaScript, React.js</p>
          <p>Backend: Node.js, Express.js</p>
          <p>Database: MongoDB</p>
          <p>Authentication: JSON Web Tokens (JWT)</p>
          <p>API Integration: Third-party APIs for accessing tour information and booking services</p>
         </div>
        
     </div>                       
 </div>
</div>
 </>

}

export default About