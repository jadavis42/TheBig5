import { Component } from "@angular/core";
import { AlphaVService } from "./alphav.service";
import { Quote } from "./quote.model";

@Component({
    selector: 'tickertable',
    templateUrl: './tickertable.component.html',
    providers: [ AlphaVService ]
})

export class TickerTableComponent {
    private data: Quote[];

    constructor(private service: AlphaVService) {
        this.Initialize(service);
    }

    async Initialize(service: AlphaVService) {
        // let quote = await service.getQuote('GOOG');
        // console.log('quote taken');
        // console.log(quote);

        this.data = new Array<Quote>(
            new Quote(await service.getQuote('GOOG'))
        );;
        
        console.log(this.data);
    }
}

