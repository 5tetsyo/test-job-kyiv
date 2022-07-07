export const getRates = (setRates) => {
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    fetch('https://api.fastforex.io/fetch-multi?from=UAH&to=EUR,GBP,USD,PLN&api_key=94182c3bbe-3a4f72674a-ren2bp', options)
      .then(response => response.json())
      .then(response => setRates(response.results))
      .catch(err => console.error(err));
}