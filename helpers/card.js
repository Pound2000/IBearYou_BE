const psql = require('../psqlAdapter').psql;  

const card ={}

//get
card.list_all = async(json)=>{
const ret ={}
let sql = "SELECT card_id, card_name, card_description, cheer_up, image_result, min_card_score, max_card_score FROM card"

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

//get
card.card_result = async(json)=>{
const ret ={}
let sql =   " select c.card_id, c.card_name, c.card_description, c.cheer_up, c.image_result  from card c "
    sql +=  " left join result r " 
    sql +=  " on c.card_id = r.card_id "
    sql +=  " where r.final_score = '" +json.final_score+"'"
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

card.card_result_real = async(json)=>{
    const ret ={}
    let x = "select CAST(final_score as numeric) from result where result_id = '" +json.result_id+ "'"
    console.log(x);
    if(27.1 <= x && x <= 29.3) {
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '8'";
    } else if(29.4 <= x && x <= 31.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '9'";
    } else if(42.4 <= x && x <= 44.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '9'";
    } else {
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '10'";
    }

    //console.log(sql);
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


export default card