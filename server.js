const express = require("express");
const cors = require('cors')
const productHelper = require("./helpers/product-helpers");
const userHelpers = require("./helpers/user-helpders");
const app = express();
const port = 8383;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send({message:"hi"});
})
app.post("/sign-up", async (req, res) => {

  userHelpers
  .doSignUp(req.body)
  .then((resp) => {
    const jsonData = {
      message: "ok",
      status: 1,
      data: resp,
    };
    res.status(200).json(jsonData);
  })
  .catch((error) => {
    console.log("error", error);
  });

});

app.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((resp)=>{
    res.send(resp);
  }).catch((error)=>{
    console.log('error: Login',error);
  })
})

app.post("/add-product", async (req, res) => {
  try {
  productHelper.addProduct(req.body,(result)=>{
    const jsonData = {
      message: "ok",
      status: 1,
      data: result,
    };
    res.status(200).json(jsonData);
    
  })
    
  } catch (err) {
    console.error("Error signup:", err);
    res.status(500).json({ message: err });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));



























