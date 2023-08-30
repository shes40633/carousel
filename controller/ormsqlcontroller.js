const path = require('path');
const carouselModel = require('./modelcontroller');
const ormSql = require('../server/ormsql')


const selectCarouselData = async (getData, callback)=>{

    con.query('SELECT * FROM carousel WHERE imageStatus=? ORDER BY sort ASC;', getData,
    (err, result)=>{
        if (err) 
            callback(err);
        else
            callback(null,result);        
    });
    
}


const createCarouselData = async(postData, callback)=>{
    console.log(postData)
    // ormSql.sync().then(() => {
    //     // 寫入對映欄位名稱的資料內容
    //     carouselModel.create({
    //       // 記得 value 字串要加上引號
    //       firstName: 'Heidi',
    //       lastName:'Liu'
    //     }).then(() => {
    //       // 執行成功後會印出文字
    //       console.log('successfully created!!') 
    //     });
    //   });

    // con.query('INSERT INTO carousel SET ?',postData,(err,result)=>{
    //     if (err) 

    //         callback(err);
    //     else

    //         callback(null,result);  
    // });
    
};

const updateCarouselData = async (updateID,updateData, callback)=>{

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
