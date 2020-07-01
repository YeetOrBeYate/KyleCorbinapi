
exports.seed = function(knex) {
  // Deletes ALL existing entrie
    return knex('project_pics').insert([
      {picture:'https://i.imgur.com/1PLRstq.png', project_id:2},
      {picture:'https://i.imgur.com/aE2WpIL.png', project_id:2},
      {picture:'https://i.imgur.com/aDEyT31.png', project_id:2}
    ]);
};
