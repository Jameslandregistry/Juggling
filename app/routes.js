const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post("/juggling-balls-answer", function(request, response){

var jugglingBalls = request.session.data['juggling-balls']

if (jugglingBalls == "3 or more"){
  response.redirect("/juggling-tricks")
}else {
  response.redirect("/inelligable")
}

})

module.exports = router
