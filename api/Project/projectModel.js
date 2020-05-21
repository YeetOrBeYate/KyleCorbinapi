const db = require("../../data/db-config.js")

const getTags = (Pid)=>{
    return db("portfolio")
    .select('tag.name')
    .from('project')
    .join('project_tag','project.id', '=', 'project_tag.project_id')
    .join('tag','project_tag.tag_id', '=', 'tag.id' )
    .where('project.id',Pid )
}

const getAll = ()=>{
    return db("portfolio")
    .select('*')
    .from('project')
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(proj)=>{
            const tags = await getTags(proj.id)
            return {...proj, tags}
        }))
    })
}

const getbyid = (Pid)=>{
    return db('portfolio')
    .select('*')
    .from('project')
    .where('id', Pid)
    .first()
}

module.exports = {
    getAll,
    getTags,
    getbyid
}
