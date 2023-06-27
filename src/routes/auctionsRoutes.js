const router = require("express").Router();
const controllers = require("../controllers/auctions");
const bids = require("../controllers/bids")
const comment = require("../controllers/comments")
const { jwtCheck } = require("../middlewares");
const { answeredQuestionEmail } = require("../services/mailing/mailing.service")

router.get("/", controllers.getAuctions);
router.get("/:id", controllers.getAuction);
router.put("/:id", controllers.putAuction);
router.post("/bid/:userId", bids.postBid)
router.post("/comment/:userId", comment.postComment)
router.post("/", controllers.postAuction);
router.get("/a/prueba",(req,res)=>{
    const data = answeredQuestionEmail({email: "doom4dead2@gmail.com"})
    Promise.resolve(data).then((e)=>{
        res.send(e)
    })
} )

module.exports = router;
