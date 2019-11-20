// export to server.js
module.exports = function(app) {

    app.get("/", function (req, res){
        res.render("index");
    });

    app.get("/:menu", function (req, res){
        res.render("page");
    })
};