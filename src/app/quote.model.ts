import { HttpClient } from "@angular/common/http";

export class Quote {

    private symbol: string;
    private open: number;
    private high: number;
    private low: number;
    private price: number;
    private volume: number;
    private http: HttpClient;

    constructor(ticker: string) {
        let symbol = ticker;

        let response = this.http.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo');
    }
}