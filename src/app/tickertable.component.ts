import { Component } from "@angular/core";
import { AlphaVService } from "./alphav.service";
import { Quote } from "./quote.model";
import { interval } from "rxjs";

@Component({
    selector: 'tickertable',
    templateUrl: './tickertable.component.html',
    providers: [ AlphaVService ]
})

export class TickerTableComponent {
    private quotes: Quote[];
    private now: Date;

    constructor(private service: AlphaVService) {
        //read the quotes immediately
        this.readQuotes(service);
    
        //then set a timer to repeat 1x per minute
        interval(30000).subscribe((val) => { this.readQuotes(service); }); 
    }    

    async readQuotes(service: AlphaVService) {
        this.quotes = new Array<Quote>(
            new Quote(await service.getQuote('GOOG')),
            new Quote(await service.getQuote('AAPL')),
            new Quote(await service.getQuote('AMZN')),
            new Quote(await service.getQuote('MSFT')),
            new Quote(await service.getQuote('FB')),
        );;
        
        this.now = new Date();
        console.log(this.quotes);
    }

    getQuotes(): Quote[]{
        return this.quotes;
    }
}

