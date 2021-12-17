const psql = require('../psqlAdapter').psql;

const to_do_list = {}

to_do_list.list_all = async (json) => {
    const ret = {}


    let sql = " select t.to_do_list_id, t.title, t.description, to_char(t.finish_date,'DD-MM-YYYY') as finish_date, t.user_id, p.priority_id "
    sql += " from to_do_list t left join priority p "
    sql += " on t.priority_id = p.priority_id "
    sql += " left join users u "
    sql += " on t.user_id = u.user_id where u.user_id = '" + json.user_id + "'"
    sql += " order by priority_id DESC; "

    console.log(sql)
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data

            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

to_do_list.create_to_do_list= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO to_do_list(title, description, finish_date, create_date, update_date, user_id, priority_id)"
    sql += " VALUES ( '"+json.title;
    sql += "','"+json.description;
    sql += "','"+json.finish_date;
    sql += "', current_timestamp";
    sql += ", current_timestamp";
    sql += ",'"+json.user_id;
    sql += "','"+json.priority_id+"')";
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


to_do_list.edit_to_do_list = async(json)=>{
    console.log(json)
const ret ={}


    let sql  = "UPDATE to_do_list SET title='"+json.title+"'";
        sql += ", description ='" +json.description+"'";
        sql += ", finish_date='"+json.finish_date+ "'";
        sql += ", update_date= current_timestamp";
	    sql += ", user_id = '" +json.user_id+"'" ;
        sql += ", priority_id = '" +json.priority_id+"'";
	    sql += " WHERE to_do_list_id ='" +json.to_do_list_id+"'";


    console.log(" sql : ",sql)

        const update = await psql.none(sql)
                .then(() => { 
                    ret.status="Success" 
                })
                .catch(error => {
                    // error;
                    throw error
                    ret.status="Error"
                });

        
        return ret;
}

to_do_list.delete_to_do_list = async(json)=>{
    console.log(json)
const ret ={}


    let sql  = "DELETE FROM to_do_list where to_do_list_id ='"+json.to_do_list_id+"'";
        sql += "and user_id ='" +json.user_id+"'";



    console.log(" sql : ",sql)

        const remove = await psql.none(sql)
                .then(() => { 
                    ret.status="Success" 
                })
                .catch(error => {
                    // error;
                    throw error
                    ret.status="Error"
                });

        
        return ret;
}

to_do_list.get_one_to_do_list = async (json) => {
    const ret = {}


    let sql = " select t.to_do_list_id, t.title, t.description, to_char(t.finish_date,'DD-MM-YYYY') as finish_date,  p.priority_id "
    sql += " from to_do_list t left join priority p "
    sql += " on t.priority_id = p.priority_id "
    sql += " left join users u "
    sql += " on t.user_id = u.user_id where u.user_id = '" + json.user_id + "'";
    sql += " and t.to_do_list_id = '" +json.to_do_list_id+ "'";

    console.log(sql)
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data

            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}
export default to_do_list


