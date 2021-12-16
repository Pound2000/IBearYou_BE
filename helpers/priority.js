const psql = require('../psqlAdapter').psql;  

const priority ={}

priority.list_all = async(json)=>{
const ret ={}

    //get all priority

    let sql   =  "select priority_id, priority_name from priority"
    console.log(sql)   
    await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });
                    return ret
    
    }

    //get low priority
    priority.low = async(json)=>{
        const ret ={}
    let sql   =  "select priority_id, priority_name from priority where priority_id = '" +json.priority_id+"'"
    console.log(sql)   
    await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });
                    return ret
    
    }

    //get medium priority
    priority.medium = async(json)=>{
        const ret ={}
    let sql   =  "select priority_id, priority_name from priority where priority_id = '" +json.priority_id+"'"
    console.log(sql)   
    await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });
                    return ret
    
    }

//get high priority
    priority.high = async(json)=>{
        const ret ={}
    let sql   =  "select priority_id, priority_name from priority where priority_id = '" +json.priority_id+"'"
    console.log(sql)   
    await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data
    
                    }
    
                    })
                    .catch(error => {
                    // error;
                    ret.status =400
                    ret.message="Error"
                    throw error  
                    });
                    return ret
    
    }


export default priority


