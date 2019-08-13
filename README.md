# Bitcoin Price Index (BPI)
This application displays the current BPI in GBP, USD and EUR.

## Intention
Use fetch to display live Bitcoin values.

##### Timeframe
1/2 day

## Process
I found the [Bitcoin Price Index API](https://www.coindesk.com/api) and chose the real-time data endpoint for this project. Once I'd finished building the basic HTML and styled it up I moved onto the Javascript and fetch code.  

## Challenges
The biggest challenge of this project was handling all of the variables withthe data-currency attribute. Some of the syntax for storing varibales in square brackets was new to me. 

## Lessons learned
- Dot notation allows you to access data stored deep in a JSON object. 
- Using square brackets is a good way to insert a variable when accessing JSON data e.g. `priceEl.innerHTML = data.bpi[currency].rate_float`. This doesn't work: `priceEl.innerHTML = data.bpi.currency.rate_float`.
- [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## Future develoment
This application could be improved by adding [more currencies](https://api.coindesk.com/v1/bpi/supported-currencies.json ). 

I could implement this by using template literals in my fetch URL to inject a variable currency code based on the data-attribue of the navigation links clicked on by the user. E.g. 
- `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json` 

I could also display [historical BPI data](https://api.coindesk.com/v1/bpi/historical/close.json?currency=GBP) by modifying the endpoint in a similar way. 

I could also adapt this app do simply display other exchange rates with a [different API](https://exchangeratesapi.io/) altogehther. 
