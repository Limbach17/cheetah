// var db = require("../../models");

$(document).ready(function() {
    $("#example-modal").on("click", function (event){
        event.preventDefault();

        db.Example.findOne({ where: { example_name: $("#target-data").text() }})
          .then(function(dbExample) {
    
            console.log("\n---------");
            console.log(dbExample);
          
          res.render("modal-block", {
            // name: ,
            // display: ,
            // description: ,
            // thumbnail: ,
            // documentation: ,

          })

        });
           
    });
});


           