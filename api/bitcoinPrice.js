require("dotenv").config();
const axios = require("axios");
const { CC_API_KEY } = process.env;

module.exports = (_req, res) => {
    const options = {
        headers: { authorization: CC_API_KEY },
    };
    axios
        .get(
            "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
            options
        )
        .then(response => {
            res.send("BTC PRICE: " + response.data.USD);
        })
        .catch(_err => {
            res.send("ERROR");
        });
};
