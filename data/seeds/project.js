
exports.seed = function(knex) {
  // Inserts seed entries
  // kyle-portfolio-be
  return knex('project').insert([
    { 
      name: 'Country Directory',
      picture:'https://i.imgur.com/surfHQp.png',
      description:'Country Directory application providing geographic and economic statistics',
      about:'Going into this project, I wanted to focus on learning a new CSS-Framework and decided on Ant-Design. Using Ant-Designs layouts and components, this is a React/Redux application retrieving data from the "REST Countries" public API. All countries listed can be filtered down by their continent, trade-bloc, or by search. Each selected country reveals more information provided by the API and some surface-level statistics I compiled through the app. Overall, I had a blast learning Ant-Design\'s API and getting past a few roadblocks on my own.',
      url:'https://kyle-corbin-country-directory.netlify.app'
    },
    {
      name:'African Market Simulator',
      picture:'https://i.imgur.com/1PLRstq.png',
      description:'A platform designed to let farmers create and share shop locations and items with other farmers.',
      about:'Originally I was only tasked with building out the Back-end for this Lambda project, but I wanted to bring a modal driven design to life. This is a full-stack application comprised of a React/Redux/Vanilla CSS front-end and a Node/Express/PostgreSQL back-end. I chose to to use JWT tokens for authentication and verification on most endpoints and Bcrypt to hash passwords on the backend. After logging in a user can create a location to set up shop, and add items to sell there. Overall, I enjoyed implementing a modal design but realized how much time can be saved, and value provided, by using a CSS framework instead of designing everything from scratch.',
      url:'https://kyle-corbin-africa-market.netlify.app'
    },
    {
      name:'Portfolio',
      picture:'https://i.imgur.com/5feLXTS.png',
      description:'React-Redux front end using the Reactstrap CSS framework, and Node-Express backend and PostgreSQL database',
      about:"The goal was to see how many features I could pick up and implement relatively quickly. One of my favorite add-ons is the interactive imaging, called CSS-Doodles, which renders the triangles wrapped around each page(click them and see what happens).The contact page is using the Nodemailer package to send confirmation to you and myself that your message has been received.The UI effects on the Portfolio filter tags were tough to wrap my head around, but bringing the idea to life helped me understand css selectors better.And lastly, the motivational quote at the bottom is randomly generated from the Nodejs backend upon refresh. Overall, this project was a great reflection on what I've learned so far while still leaving room for improvments.",
      url: 'https://dazzling-engelbart-e26037.netlify.app/'
    },
    {
      name:'Contact Keeper',
      picture:'https://i.imgur.com/tTgWM1Y.png',
      description:'React-Redux application to keep track of contact information',
      about:"This is my first backend built with a noSQL database. I chose MongoDB to try out the popular MERN stack and I am happy with the result. A user can create, edit and delete contact cards in their personal or professional life. Part of me liked how 'unstructured' a document database is relative to PostgreSQL but still felt taken back at the data not being in 3nf. I could see myself using both for structured and unstructed data on a more complicated application. For this application I used JWT tokens for authentication and verification on all required endpoints, and sessionStorage to hold important parts of state and the token.",
      url:'https://kyle-contact-keeper.netlify.app/'
    }
  ]);
};
