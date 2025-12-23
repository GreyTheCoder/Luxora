# Luxora

Luxora is an Airbnb-style web application that lets users discover, list, and book properties. Built as a learning project to deepen my full‑stack skills, Luxora demonstrates core concepts of a booking platform — from secure authentication and image uploads to persistent listings and user reviews.

Live demo: https://luxora-jzgd.onrender.com

## Tech stack
- Frontend: EJS, HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Database: MongoDB (Mongoose)  
- Image storage: Cloudinary  
- Authentication: Passport.js  
- Deployment: Render

## Key features
- User registration and login via Passport.js (local strategy)  
- Create, edit, and delete property listings  
- Upload and manage property images with Cloudinary  
- Leave reviews on property pages  
- Flash messages for success and error feedback  
- Session handling and access control for private routes  
- Responsive UI with a consistent navbar and footer

## Getting started

1. Clone the repository
```bash
git clone https://github.com/GreyTheCoder/Luxora.git
cd Luxora
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the project root and add the following variables:
```env
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

4. Start the application
```bash
node app.js
```

The app will run locally at: http://localhost:8080

## Notes on implementation
- Sessions and authentication are handled with Express sessions and Passport.js to secure user flows for creating and managing listings.
- Images are uploaded directly to Cloudinary, keeping the server stateless with respect to file storage.
- Mongoose schemas model properties, users, and reviews, with relationships and basic validation.
- Flash messages are used to surface immediate feedback for user actions (e.g., successful listing creation or validation errors).

## Roadmap / Future plans
Planned improvements include:
- Integrating an online payment provider for bookings
- Adding interactive maps to show property locations
- Advanced search and filtering (price, availability, location)
- Admin dashboard for site moderation and analytics
- Optional dark mode and improved accessibility

## Author
Gaurav Singh  
Full Stack Developer — Node.js | Express | MongoDB

