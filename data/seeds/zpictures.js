
exports.seed = function(knex) {
  // Deletes ALL existing entrie
    return knex('project_pics').insert([
      {picture:'https://i.imgur.com/surfHQp.png', project_id:1},
      {picture:'https://i.imgur.com/vbkrFaD.png',project_id:1},
      {picture:'https://i.imgur.com/1PLRstq.png', project_id:2},
      {picture:'https://i.imgur.com/aDEyT31.png', project_id:2},
      {picture:'https://i.imgur.com/csYEvcf.png', project_id:2},
      {picture:'https://i.imgur.com/5feLXTS.png', project_id:3},
      {picture:'https://i.imgur.com/jPxUsV3.png', project_id:3},
      {picture:'https://i.imgur.com/XFDGqoi.png', project_id:3},
      {picture:'https://i.imgur.com/tTgWM1Y.png', project_id:4},
      {picture:'https://i.imgur.com/dl7sAjW.png', project_id:4},
      {picture:'https://i.imgur.com/s71GbJl.png', project_id:4}
    ]);
};
