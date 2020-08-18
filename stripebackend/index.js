const cors = require("cors")
const express = require("express")
//add stripe
const stripe = require("stripe")("sk_test_51HHLjtGXBu3Y0CY1EEvkaiATIRyS4Bp6SK52T9SMrS1TovDQf43SlU38WjXjUGnb6uWt2mHWIzkTGFNkgTcUngy600MVxwnCdu")
const { v4:  uuidv4 } = require("uuid");

const app = express();


//middleware
app.use(express.json())
app.use(cors())


//routes
app.get("/", (req, res) => {
    res.send("IT WORKS")
});

app.post("/payment", (Req, res) => {

    const {product, token} = req.body;
    console.log("Product", product);
    console.log("Price", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email:token.email,
        source:token.id  
    })
    .then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `${product.name}`
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen
app.listen(8080, () => console.log("Listning 8080"))