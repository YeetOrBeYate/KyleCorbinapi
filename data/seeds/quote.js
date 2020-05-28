
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('quote').insert([
    {line:'Life is either a daring adventure or nothing at all', author:'Helen Keller'},
    {line:'People are successful because they think and act like successful people', author:'Roy T. Bennett'},
    {line:'Without struggle, success has no value', author:'Aaron Lauritsen'},
    {line:'Great acts are made up of small deeds', author:'Lao-Tzu'},
    {line:'Sometimes God makes better choices for us than we could have ever made for ourselves', author:'Jennifer Hudson Taylor'},
    {line:'There is no instinct like that of the heart', author:'George Gordon Byron'},
    {line:'The struggles we endure today will be the "good old days" we laugh about tomorrow', author:'Aaron Lauritsen'},
    {line:'Inspiration comes of working every day', author:'Charles Baudelaire'},
    {line:'Nobody made a greater mistake than he who did nothing because he could do only a little', author:'Edmund Burke'},
    {line:'Go out on a limb. That’s where the fruit is', author:'Jimmy Carter'},
    {line:'A tiny change today brings a dramatically different tomorrow', author:'Richard Bach'},
    {line:'Being defeated is often a temporary condition. Giving up is what makes it permanent', author:'Marilyn vos Savant'},
    {line:'Tragedy and adversary are the stones we sharpen our swords against so we can fight new battles', author:'Sherrilyn Kenyon'},
    {line:'Courage is a blend of discretion and capacity to take calculated risk', author:'Shesh Nath Vernwal'},
    {line:'Sometimes you just have to jump out the window and grow wings on the way down', author:'Ray Bradbury'},
    {line:'It has been my philosophy of life that difficulties vanish when faced boldly', author:'Isaac Asimov'},
    {line:"If you're waiting until you feel talented enough to make it, you'll never make it", author:'Criss Jami'},
    {line:'You get in life what you have the courage to ask for', author:'Nancy D. Solomon'},
    {line:'Perfection is not attainable, but if we chase perfection we can catch excellence', author:'Vince Lombardi'},
    {line:'Where you stumble and fall, there you will find gold', author:'Joseph Campbell'},
    {line:'One must work and dare if one really wants to live', author:'Vincent Van Goph'},
    {line:'No real excellence, personal or social, artistic, philosophical, scientific, or moral, can arise without solitude', author:'William Deresiewicz'},
    {line:'The past was "built", the present is "assembled" & the future - "programmed"!', author:'Vishwanath S J'},
    {line:'Be yourself; everyone else is already taken.', author:'Oscar Wilde'},
    {line:'Building bridges is the best defence against ignorance', author:'Aaron Lauritsen'},
  ]);
};
