
exports.seed = function(knex) {
  // Deletes ALL existing entries

  // {name:"Show all"},-1
  // {name:"Front-end"},-2
  // {name:"Back-end"},-3
  // {name:"Full-stack"},-4
  // {name:"React.js"},-5
  // {name:"Redux"},-6
  // {name:"Node.js"},-7
  // {name:"Express.js"}-8,
  // {name:"PostgreSQL"},-9
  // {name:"Ant-Design"},-10
  // {name:"Reactstrap"},-11
  // {name:"CSS"},-12
  // {name:"JWT"},-13
  // {name:'Bcrypt'},-14
  // {name:'Material-UI'}-15
  // {'mongoDB'} -16

    return knex('project_tag').insert([
      {project_id: 1, tag_id:2},
      {project_id: 1, tag_id:5},
      {project_id: 1, tag_id:6},
      {project_id: 1, tag_id:10},
      {project_id: 2, tag_id:4},
      {project_id: 2, tag_id:5},
      {project_id: 2, tag_id:6},
      {project_id: 2, tag_id:7},
      {project_id: 2, tag_id:8},
      {project_id: 2, tag_id:9},
      {project_id: 2, tag_id:12},
      {project_id: 2, tag_id:13},
      {project_id: 2, tag_id:14},
      {project_id:1, tag_id:1},
      {project_id:2, tag_id:1},
      {project_id: 3, tag_id:1},
      {project_id: 3, tag_id:4},
      {project_id: 3, tag_id:5},
      {project_id: 3, tag_id:6},
      {project_id: 3, tag_id:7},
      {project_id: 3, tag_id:8},
      {project_id: 3, tag_id:9},
      {project_id: 3, tag_id:11},
      {project_id:4, tag_id:1},
      {project_id:4, tag_id:4},
      {project_id:4, tag_id:5},
      {project_id:4, tag_id:6},
      {project_id:4, tag_id:7},
      {project_id:4, tag_id:8},
      {project_id:4, tag_id:13},
      {project_id:4, tag_id:14},
      {project_id:4, tag_id:15},
      {project_id:4, tag_id:16}
    ]);
};
