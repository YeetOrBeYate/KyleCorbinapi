
exports.seed = function(knex) {
  // Deletes ALL existing entries

    return knex('repo').insert([
      {url: 'https://github.com/YeetOrBeYate/CountryDirectory', name:'Front-end', project_id:1},
      {url: 'https://github.com/YeetOrBeYate/Africa-FrontEnd', name:'Front-end', project_id:2},
      {url: 'https://github.com/AfricanMarketplace/Back-end', name:'Back-end', project_id:2}
    ]);
};
