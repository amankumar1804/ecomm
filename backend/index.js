const express = require("express");
require("./db/config");
const user = require("./db/user");
const Product = require("./db/product");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/signup", async (req, resp) => {
  let usr = new user(req.body);
  let result = await usr.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let usr = await user.findOne(req.body).select("-password");
    if (usr) {
      resp.send(usr);
    } else {
      resp.send("oops!no user found");
    }
  }
  else {
    resp.send("oops!no user found");
  }
});

app.post("/addproduct",async (req,resp)=>{
let product=new Product(req.body);
let result=await product.save();
resp.send(result);
})

app.listen(5000);
