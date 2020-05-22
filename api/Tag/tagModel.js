const db = require("../../data/db-config.js");

const project = require('../Project/projectModel.js')

const getAllTags = ()=>{
    return db('portfolio')
    .select('*')
    .from('tag')
    .orderBy('id')

}

const filterbyTag = (Tid)=>{
    return db('portfolio')
    .select('project.*')
    .from('tag')
    .join('project_tag', 'tag.id', "=", "project_tag.tag_id")
    .join("project", "project_tag.project_id", "=", "project.id")
    .where("tag.id", Tid)
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(proj)=>{
            const tags = await project.getTags(proj.id)
            return {...proj, tags}
        }))
    })
}

module.exports = {
    getAllTags,
    filterbyTag
}