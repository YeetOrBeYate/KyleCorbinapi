const db = require("../../data/db-config.js")

const getTags = (Pid)=>{
    return db("portfolio")
    .select('tag.name')
    .from('project')
    .join('project_tag','project.id', '=', 'project_tag.project_id')
    .join('tag','project_tag.tag_id', '=', 'tag.id' )
    .where('project.id',Pid )
}

const getRepos = (Pid) =>{
    return db('portfolio')
    .select('repo.id', 'repo.name', 'repo.url')
    .from('repo')
    .join('project', 'repo.project_id', '=', 'project.id')
    .where('project.id' , Pid)
}

const getAll = ()=>{
    return db("portfolio")
    .select('*')
    .from('project')
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(proj)=>{
            const tags = await getTags(proj.id)
            // const repos = await getRepos(proj.id)
            return {...proj, tags}
        }))
    })
}

const getPicturesbyid = (Pid)=>{
    return db('portfolio')
    .select('picture')
    .from('project_pics')
    .where('project_id', Pid)
}

const getbyid = (Pid)=>{
    return db('portfolio')
    .select('*')
    .from('project')
    .where('id', Pid)
    .first()
    .then(async(proj)=>{
        const tags = await getTags(proj.id)
        const repos = await getRepos(proj.id)
        const pictures = await getPicturesbyid(proj.id)
        return {...proj, tags, repos, pictures}
    })
}

module.exports = {
    getAll,
    getTags,
    getbyid,
    getRepos
}
