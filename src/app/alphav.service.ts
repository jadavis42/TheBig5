import { HttpClient } from "@angular/common/http";

export class AlphaVService {
    private key = '6BVK5XCTJMG5UAIS';

    async getQuote(symbol: string) {
        console.log('getting quote: ' + symbol);

        const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + symbol + '&apikey=' + this.key);
        const data = await response.json();
        console.log(data);
        return data["Global Quote"];
    }
}