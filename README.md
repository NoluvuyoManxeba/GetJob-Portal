## GetJob Web Application
GetJob Web Application is a MERN Stack based web app which helps in streamlining the flow of job application process. It allows users to select their roles (applicant or recruiter), and create an account. In this web app, login session are persistent and REST APIs are securely protected by JWT token verification. After logging in, a recruiter can create/delete/update jobs, shortlist/accept/reject applications, view resume and edit profile. And, an applicant can view jobs, perform fuzzy search with various filters, apply for jobs with an SOP, view applications, upload profile picture, upload resume and edit profile. Hence, it is an all in one solution for a job application system.

There are Three Categories of users who can use Application
1. Job Seeker
2. Employer
3. Admin

 
## Job Seeker Module:
- Upload CV or application submitted by jobseekers
- Search jobs by key"ords, category, work status
- Apply for a job "ith the click of a button
- Resume Posting capabilities, & create, edit, expire
 
## Employer Module:
- Ability to Search resume by key"ords, job category, days sinceposted
- Post jobs with detailed job description &job title, company name,company url, location, salary, job type, work type, description,required skills.
- Ability to create and edit a company profile.

## Admin Module:
- Ability to change the look and feel of your site by changing one template html file
- Ability to send email noti+cations to candidates, members, oremployers depending on their account status, right from administrative Panel!
- Send newssletters and emails to employers and Job Seekers.
- Create, edit & Save as many icon sets as you like

The application will be deployed using vercel as it is the most efficient.

Deployed: getjob-portal.netlify.app

The application will be created using react. The app is similar to the popular app we all know "Indeed" but very much different in features and being able to filter through the application to your specific searches.

## Tools & Technology used: 
- HTML
- CSS
- node.js
- Reactjs
- MongoDB
- Express

## Motivation for Architecture Choice:

The decision to use the MERN (MongoDB, Express, React, Node.js) stack for our job search portal, GetJob Web Application, is based on several compelling reasons:

- Full-Stack Capabilities: The MERN stack allows us to cover the entire development process, from frontend (React) to backend (Node.js and Express) and database management (MongoDB). This cohesion streamlines development, making it efficient and consistent.

- JavaScript-Based: All components of the MERN stack are built using JavaScript, which simplifies code sharing and provides a seamless development experience for the team.

- React for Rich UI: Create React App (CRA) will be used to scaffold our frontend. CRA provides an excellent starting point for our React application, including a development server, build configurations, and other tools that simplify the React development process.

- Scalability: Node.js, with its non-blocking architecture, ensures that our application can handle a large number of concurrent users efficiently. This makes it ideal for scaling the application as the user base grows.

- Community Support: The MERN stack has a vast and active developer community, which means there is an abundance of resources, libraries, and tools available to enhance development speed and maintain code quality.

## Deployment Strategy:

I have decided to deploy the application using Netlify for the frontend and a cloud platform like Render for the backend. Netlify offers serverless deployment for React applications, ensuring quick and hassle-free hosting, while Render  will handle the backend server deployment.

## User Stories:

- As a Job Seeker, I want to easily search and browse job listings based on various criteria like keywords, category, and work status. I also want to apply for jobs with a single click and keep track of my applications.

- As an Employer, I want to post detailed job listings, including job title, company information, location, salary, and required skills. I should be able to manage applications, search resumes, and shortlist suitable candidates efficiently.

- As an Admin, I want to customize the look and feel of the website easily by modifying a template HTML file. I also need to manage email notifications to users and employers, send newsletters, and have control over icon sets.

## Key Differentiators:

- Improved User Experience: Our GetJob Web Application will prioritize user experience by providing a user-friendly and intuitive interface for both job seekers and employers. The application will be designed with a focus on simplicity and efficiency, making it easier for users to achieve their objectives.

- Smart Job Matching: Our application will employ advanced algorithms to match job seekers with suitable job listings based on their skills and preferences. This will enhance the chances of successful job applications and reduce the time spent searching for relevant opportunities.

- Cost-Effectiveness: Unlike some existing job portals that charge high fees for job postings and resume access, our platform will provide competitive and affordable pricing options for employers. This will attract more employers and increase the variety of job listings available to job seekers.

- Efficient Application Management: Employers will benefit from advanced application management features that allow for seamless sorting, filtering, and communication with applicants. This will streamline the hiring process and save valuable time for recruiters.

In conclusion, the choice of the MERN stack, along with Vercel and Create React App, provides us with a robust and scalable architecture for the GetJob Web Application. The application aims to differentiate itself through improved functionality, cost-effectiveness, and an emphasis on user experience, making it a valuable and competitive job search portal in the market.

## Installation

1. git clone repository or download zip
2. cd to client & server directory on two seperate command prompts
3. npm install on both (seperately)
4. npm start to run (server)
5. npm start to run (client)
6. npm run test(to test)

click on >>>  Local:   http://localhost:5173/

## How to Use:
1. sign in to GetJob Portal
2. click on find job & search on search bar
3. filter search to desired requirements
4. to search for specific companies, click on companies
5. Login details: testaccount@gmail.com
   Password: 123456
   NB: Can create an account with own email to login

## Recruiter
 to upload jobs click on >>> upload job
 
sign in to GetJob Portal
![figure 1](<sign in search.JPG>)

![figure 2](<recruiter posts jobs.JPG>)

find different companies
![figure 3](<find companies.JPG>)

filter your search to your specific needs
![figure 4](<filter search.JPG>)

more about GetJob
![figure 5](<about on GetJob.JPG>)
