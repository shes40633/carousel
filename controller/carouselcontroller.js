const path = require('path');
const { selectCarouselData,
        createCarouselData,
        updateCarouselData,
        delCarouselData } 
        = require('./ormsqlcontroller');

class carouselController {
    async createCarousel(req, res) {

        let method = req.method;

        let imgPath = req.file.path
        if (imgPath == null)
            res.sned('no image')

        let imgSort = req.body.sort
        if (imgSort == null)
            res.send('no sort')

        let postData = {
            imagePath: imgPath,
            imageStatus: '1',
            sort: imgSort
        }

        try {
            if(method == 'POST'){
                await createCarouselData(postData,(err,result)=>{

                    console.log(result)
               })
            }
        } catch (error) {
            res.send(error)
        }
        


    }



    async selectCarousel(req, res) {
        let getData = {
            id: req.body.id,
            imageStatus: req.body.imageStatus
        };
        // console.log(getData)
        // await selectCarouselData(getData, (err, data) => {
        //     if (err)
        //         throw err
        //     else
        //         res.json(data)
        // });
    }

    async updateCarousel(req, res) {
        let updateID = req.params.id;
        let updateData = req.body;
        // console.log(req.body)
        await updateCarouselData(updateID,req.body, (err, data) => {
            if (err)
                throw err
            else
                console.log(data)
                // res.json(data)
        });

    }

    async delCarousel(req, res) {
        let delID = req.body.id;

        if (isNaN(delID)) {
            console.log('ID not found');
        }

        await delCarouselData(delID, (err, data) => {
            if (err)
                throw err
            else
                console.log(data)
                // res.json(data)
        });

    }
}

module.exports = carouselController;


// class APIBASE(){
//     function _1_validate()

//     function _2_check_Header

//     function _3_process()


//     function process(){}
// }
