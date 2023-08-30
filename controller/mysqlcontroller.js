const path = require('path');
const sqlcon = require('../server/mysql');

const SqlConnect = async () => {
    con = sqlcon.SQLConnection();
    con.connect((err) => {
        if (err) 
            throw err;
        // else 
            // console.log("Connected!");
        
    });
}


const selectCarouselData = async (getData, callback)=>{
    await SqlConnect();

    con.query('SELECT * FROM carousel WHERE imageStatus=? ORDER BY sort ASC;', getData,
    (err, result)=>{
        if (err) 
            callback(err);
        else
            callback(null,result);        
    });
    
}


const createCarouselData = async(postData, callback)=>{
    
    await SqlConnect();
    con.query('INSERT INTO carousel SET ?',postData,(err,result)=>{
        if (err) 

            callback(err);
        else

            callback(null,result);  
    });
    
};

const updateCarouselData = async (updateID,updateData, callback)=>{
    await SqlConnect();
    let updateSort = parseInt(updateData.sort)
    // console.log({
    //     imagePath : updateData.imagePath,
    //     imageStatus : updateData.imageStatus,
    //     sort : updateSort
    // });
    con.query('UPDATE carousel SET ? WHERE id=? ;', [{
        imagePath : updateData.imagePath,
        imageStatus : updateData.imageStatus,
        sort : updateSort
    },updateID], 
    (err, result)=>{
        if (err) 
            callback(err);
        else
            callback(null,'success');        
    });
    
}

// 1為開始 0為關閉
const delCarouselData = async (delData, callback)=>{
    await SqlConnect();
    let delstatus = "0";
    con.query('UPDATE carousel SET imageStatus=? WHERE id=? ;', [delstatus,delData], 
    (err, result)=>{
        if (err) 
            callback(err);
        else
            callback(null,'success');        
    });
    
}

module.exports = {
    selectCarouselData,
    createCarouselData,
    updateCarouselData,
    delCarouselData
}; 
