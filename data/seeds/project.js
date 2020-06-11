
exports.seed = function(knex) {
  // Inserts seed entries
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
      about:'Originally I was only tasked with building out the Back-end for this Lambda project, but I wanted to bring a modal driven design to life. This is a full-stack application comprised of a React/Redux/Vanilla CSS front-end and a Node/Express/PostgreSQL back-end. I chose to to use JWT tokens for authentication and verification on most endpoints and Bcrypt to hash password on the backend. After logging in a user can create a location to set up shop, and add items to sell there. Overall, I enjoyed implementing a modal design but realized how much time can be saved, and valued provided, using a CSS framework instead of designing everything from scratch.',
      url:'https://kyle-corbin-africa-market.netlify.app'
    },
    {
      name:'Portfolio',
      picture:'https://i.imgur.com/5feLXTS.png',
      description:'React-Redux front end using the Reactstrap CSS framework, and Node-Express backend and Postgresql database',
      about:"The goal was to make a simple showcase of what I've learned from Lambda School.",
      url: 'not hosted yet'
    }
  ]);
};
