const db = require('../config/db')
class Post{
    constructor(title,body){
        this.title=title
        this.body=body
    }
    async save(){
    let d=new Date()
    let yy =d.getFullYear()
    let mm= d.getMonth()+1
    let dd = d.getDate()

    let createdAt = `${yy}-${mm}-${dd}`

    let sql=`
    INSERT INTO new_table(
        title,
        body,
        created_at
    )
    VALUES(
        '${this.title}',
        '${this.body}',
        '${createdAt}'
    )
    `
    return await db.execute(sql)
    

    }
    static findall(){
        let sql = 'SELECT * FROM new_table;'
        return db.execute(sql)
    }
    static findbyid(id){
        let sql = `SELECT * FROM new_table WHERE id = ${id};`
        return db.execute(sql)
    }
}

module.exports=Post;