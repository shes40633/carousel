const http = require('http');
const app = require('../app');
const carouselModel = require('../controller/modelcontroller')
const ormSql = require('./ormsql')

const port = process.env.PORT || '3000'
const server = http.createServer(app);
// server.listen(port)

ormSql.sync({ force: false }).then(() => {
    server.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
});
