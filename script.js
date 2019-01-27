const tokens = ['BTC','ETH','LTC','XRP','BCH','NEO','DASH','ZEC','XMR'];
const currencies = ['USD'];
const baseMultipriceURL = 'https://min-api.cryptocompare.com/data/pricemulti?';
const fetchCryptoPrices = async () => {
    const response = await fetch(
        baseMultipriceURL 
        + 'fsyms=' + tokens.join(',') 
        + '&tsyms=' + currencies.join(',') 
        + '&api_key=' + config.apiKey, //stored in .gitignored config.js file
        {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.dir(myJson);
    // do something with myJson
}
fetchCryptoPrices();