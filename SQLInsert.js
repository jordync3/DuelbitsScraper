const Sequelize = require('sequelize');

const sequelize = new Sequelize('Duelbits','admin', 'admin', {
    dialect: 'mssql',
    host: 'localhost',
    port:'1433',
    dialectOptions: {
    requestTimeout: 60000,
      options:{
        encrypt:true
      },
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 60000
    },
  
  });
  
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully to Monitoring.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });


    function sqlInsert(array, tablename){


        sequelize.query
        (`

            INSERT INTO `+tablename+` values ('`+array[0]+`','`+array[1]+`','`+(array[2]+array[3])+`','`+array[4]+`','`+(array[5]+(array[6]||''))+`', GETDATE())


        `).then(function (docs) {}).catch(function (err) {console.log(err)})

    }




module.exports = {sqlInsert}

// sqlInsert([ 'Sweet Bonanza', 'JT240824', '20', '.00', '0.54x', '10', '.72' ], 'AllBets')