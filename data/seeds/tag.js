
exports.seed = function(knex) {
  // Deletes ALL existing entrie
    return knex('tag').insert([
      {name:"Show all"},
      {name:"Front-end"},
      {name:"Back-end"},
      {name:"Full-stack"},
      {name:"React.js"},
      {name:"Redux"},
      {name:"Node.js"},
      {name:"Express.js"},
      {name:"PostgreSQL"},
      {name:"Ant-Design"},
      {name:"Reactstrap"},
      {name:"CSS"},
      {name:"JWT"},
      {name:'Bcrypt'}
    ]);
};
