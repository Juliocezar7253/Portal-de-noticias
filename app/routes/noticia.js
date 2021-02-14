//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticia', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
          noticiasModel.getNoticia(connection, function(erro, result){
            res.render("notices/noticia", {noticia : result});
        });
        connection.end();
    });
};