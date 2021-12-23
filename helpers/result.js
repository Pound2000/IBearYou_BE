const psql = require('../psqlAdapter').psql;  

const result ={}

result.list_result = async(json)=>{
const ret ={}

let sql = " SELECT r.result_id, to_char(r.create_date, 'DD-MM-YYYY') as date, r.final_score,  u.user_id, c.card_id, c.card_name "
    sql += " FROM result r  " 
    sql += " LEFT JOIN users u ON r.user_id = u.user_id "
    sql += " LEFT JOIN card c ON r.card_id = c.card_id "
    sql += " order by r.result_id; " 
	
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

//post
result.result= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO result( create_date, final_score, user_id, card_id)"
	sql += " VALUES( current_timestamp "
    sql += ",'"+json.final_score;
    sql += "','"+json.user_id;
    sql += "','"+json.card_id+"')";

    console.log(" sql : ",sql)
       const insert = await psql.none(sql)
                .then(() => { 
                        ret.status=200
                        ret.message="Success"
                })
                .catch(error => {
                    // error;
                        ret.status=400
                        ret.message="Error"
                });

        
        return ret;
}


//put
result.edit_card_id = async(json)=>{
    console.log(json)
const ret ={}


    let sql  = " UPDATE result SET card_id = '" +json.card_id+"'";
	    sql += " WHERE result_id = '"+json.result_id+"'";
        sql += " and user_id = '"+json.user_id+"'";
        

    console.log(" sql : ",sql)

        const update = await psql.none(sql)
                .then(() => { 
                    ret.message="Success"  
                })
                .catch(error => {
                    // error;
                    throw error
                    ret.message="Error"
                });

        
        return ret;
}

export default result