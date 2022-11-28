
const db = require('../util/database');


module.exports = class User{
    
    constructor(uid, username, password, cntac, cntpoint, cntwa) 
    {
       this.uid = uid;
       this.username = username;
       this.password = password;
       this.cntac = cntac;
       this.cntpoint = cntpoint;
       this.cntwa = cntwa;
       
    }

    
    
    save()
    {
        return db.execute('INSERT INTO user (username, password, cntac, cntpoint, cntwa  ) VALUES(?, ?, ?, ?, ?)',
         [this.username, this.password, this.cntac, this.cntpoint, this.cntwa]
        );
    }

    update(uid)
    {
        return db.execute('UPDATE user SET cntac = ?, cntpoint = ?, cntwa = ?   WHERE uid = ?', 
        [this.cntac, this.cntpoint, this.cntwa ,uid]);
    }

    static getAll()
    {
        
         // return full promise where it need
         let data = db.execute('SELECT * FROM user');
         return data;
    }

    static findById(id, cb)
    {
        // find data from database by conditions
        return db.execute('SELECT * FROM user WHERE user.uid = ?', [id]);
    }

    static deleteById(id)
    {

    }

    
}