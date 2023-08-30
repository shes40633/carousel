const Sequelize = require("sequelize");

const ormSql = require('../server/ormsql')

const carouselModel = ormSql.define("carousel", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    imagePath:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imageStatus:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sort:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createTime:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateTime:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }

},{
timestamps: false});

module.exports = carouselModel;