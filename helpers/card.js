const psql = require('../psqlAdapter').psql;  

const card ={}

//get
card.list_all = async(json)=>{
const ret ={}
let sql = " SELECT card_id, card_name, card_description, cheer_up, image_result, min_card_score, max_card_score FROM card "
    sql += " order by card_id asc; "

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

// get card
card.card_result_real = async(json)=>{
    const ret ={}
    const x = await psql.query("select final_score from result where result_id = '" +json.result_id+ "' and user_id = '" +json.user_id+ "'", function(err,Result){

        return parseFloat(Result);

    });

    console.log(x);

    const final_score = x[0].final_score;

    if(11 <= final_score && final_score <= 13.2) {
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '1'";
    } else if(13.3 <= final_score && final_score <= 15.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '2'";
    } else if(20.2 <= final_score && final_score <= 22.4){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '3'";
    } else if(22.5 <= final_score && final_score <= 24.7){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '4'";
    } else if(24.8 <= final_score && final_score <= 27){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '5'";
    } else if(15.6 <= final_score && final_score <= 17.8){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '6'";
    } else if(31.7 <= final_score && final_score <= 33.9){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '7'";
    } else if(27.1 <= final_score && final_score <= 29.3){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '8'";
    } else if(29.4 <= final_score && final_score <= 31.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '9'";
    } else if(17.9 <= final_score && final_score <= 20.1){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '10'";
    } else if(34 <= final_score && final_score <= 35){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '11'";
    } else if(50 <= final_score && final_score <= 51.8){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '12'";
    } else if(55.7 <= final_score && final_score <= 57.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '13'";
    } else if(46.2 <= final_score && final_score <= 48){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '14'";
    } else if(57.6 <= final_score && final_score <= 59.4){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '15'";
    } else if(42.4 <= final_score && final_score <= 44.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '16'";
    } else if(53.8 <= final_score && final_score <= 55.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '17'";
    } else if(51.9 <= final_score && final_score <= 53.7){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '18'";
    } else if(59.5 <= final_score && final_score <= 60.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '19'";
    } else if(48.1 <= final_score && final_score <= 49.9){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '20'";
    } else if(44.3 <= final_score && final_score <= 46.1){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '21'";
    } else if(40.5 <= final_score && final_score <= 42.3){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '22'";
    } else if(72.1 <= final_score && final_score <= 73.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '23'";
    } else if(73.7 <= final_score && final_score <= 75.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '24'";
    } else if(78.5 <= final_score && final_score <= 80){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '25'";
    } else if(80.1 <= final_score && final_score <= 81.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '26'";
    } else if(76.9 <= final_score && final_score <= 78.4){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '27'";
    } else if(81.7 <= final_score && final_score <= 83.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '28'";
    } else if(83.3 <= final_score && final_score <= 84.8){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '29'";
    } else if(88.1 <= final_score && final_score <= 89.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '30'";
    } else if(75.3 <= final_score && final_score <= 76.8){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '31'";
    } else if(84.9 <= final_score && final_score <= 86.4){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '32'";
    } else if(86.5 <= final_score && final_score <= 88){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '33'";
    } else if(89.7 <= final_score && final_score <= 91.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '34'";
    } else if(70.5 <= final_score && final_score <= 72){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '35'";
    } else if(91.3 <= final_score && final_score <= 91.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '36'";
    } else if(285.3 <= final_score && final_score <= 294.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '37'";
    } else if(266.1 <= final_score && final_score <= 275.6){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '38'";
    } else if(256.5 <= final_score && final_score <= 266){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '39'";
    } else if(275.7 <= final_score && final_score <= 285.2){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '40'";
    } else if(408 <= final_score && final_score <= 412.9){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '41'";
    } else if(413 <= final_score && final_score <= 417.9){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '42'";
    } else if(418 <= final_score && final_score <= 422.9){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '43'";
    } else if(423 <= final_score && final_score <= 427.5){
        var sql = "select card_id, card_name, card_description, cheer_up, image_result from card where card_id = '44'";
    } else {
        var sql = "error";
    }


    //console.log(sql);
    await psql.manyOrNone(sql)
                    .then((data) => {
                     
    
                    console.log(data.length)
                    if(data.length >0){ 
                    ret.status=200
                    ret.message="Success"
                    ret.data = data[0]
    
    
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
card.get_one_card = async(json)=>{
    const ret ={}
    let sql = " SELECT card_id, card_name, card_description, cheer_up, image_result FROM card "
        sql += " where card_id = '" +json.card_id+ "'";
    
 await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data.length)
                if(data.length >0){ 
                ret.status=200
                ret.message="Success"
                ret.data = data[0]


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