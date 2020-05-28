
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('project').insert([
    { 
      name: 'Country Directory',
      picture:'https://i.imgur.com/surfHQp.png',
      description:'Ant-design layout driven by a React-Redux front end',
      about:'This project took about 2 weeks to finnish start to finnish. I was able to learn the Country api quickly, as well as Ant-designs api as well.',
      url:'https://kyle-corbin-country-directory.netlify.app'
    },
    {
      name:'African Market Simulator',
      picture:'https://i.imgur.com/1PLRstq.png',
      description:'React-Redux front-end with vanilla css, and Node-Express backend powered by a Postgresql database',
      about:'originally I only built the backend for a Lambda labs project, but decided to build out a model driven front end',
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
