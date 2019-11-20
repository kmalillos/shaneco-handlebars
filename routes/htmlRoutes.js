// export to server.js
module.exports = function(app) {

    app.get("/", function (req, res){
        res.render("index");
    });

    app.get("/engagement", function (req, res){
        res.render("page", { title: "Engagement", shop: "Engagement Rings"});
    })

    app.get("/wedding", function (req, res){
        res.render("page", { title: "Wedding", shop: "Wedding Rings and Bands" });
    })

    app.get("/diamondsandgems", function (req, res){
        res.render("page", { title: "Diamonds and Gems", shop: "Loose Stones, Diamonds and Gems"});
    })

    app.get("/Jewelry", function (req, res){
        res.render("page", { title: "Jewelry", shop: "Rings, Bracelets, Necklaces, and More"});
    })

    app.get("/personalize", function (req, res){
        res.render("page", { title: "Personalize", shop: "Personalized Gifts"});
    })

    app.get("/about", function (req, res){
        res.render("page", { title: "About", shop: "Information"});
    })
};