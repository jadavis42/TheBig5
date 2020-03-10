import { HttpClient } from "@angular/common/http";

export class Quote {

    private symbol: string;
    private open: number;
    private high: number;
    private low: number;
    private price: number;
    private volume: number;
    private change: number;
    private changePct: number;
    private changeColor: string;

    private SYMBOL = "01. symbol";
    private OPEN = "02. open";
    private HIGH = "03. high";
    private LOW = "04. low";
    private PRICE = "05. price";
    private VOLUME = "06. volume";
    private CHANGE = "09. change";
    private CHANGE_PCT = "10. change percent";

    constructor(jQuote: string) {
        this.symbol = jQuote[this.SYMBOL];
        this.open = jQuote[this.OPEN];
        this.high = jQuote[this.HIGH];
        this.low = jQuote[this.LOW];
        this.price = jQuote[this.LOW];
        this.volume = jQuote[this.VOLUME];
        this.change = jQuote[this.CHANGE];

        let changePct = jQuote[this.CHANGE_PCT];
        //console.log(changePct.length);
        console.log(changePct.substring(0, changePct.length - 1));
        this.changePct = Number(changePct.substring(0, changePct.length - 1));
        
        if (this.changePct > 0.2) {
            this.changeColor = 'text-success';
        } else if (this.changePct < - 0.2) {
            this.changeColor = 'text-danger';
        } else {
            this.changeColor = 'text-warning';
        }
    }
}