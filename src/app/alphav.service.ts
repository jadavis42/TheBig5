import { HttpClient } from "@angular/common/http";

export class AlphaVService {
    private key = '';

    async getQuote(symbol: string) {
        console.log('getting quote: ' + symbol);

        const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo');
        const data = await response.json();
        console.log(data);
        return data["Global Quote"];
    }
}