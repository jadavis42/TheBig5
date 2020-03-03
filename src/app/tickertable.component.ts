import { Component } from "@angular/core";
import { AlphaVService } from "./alphav.service";

@Component({
    selector: 'tickertable',
    templateUrl: './tickertable.component.html',
    providers: [ AlphaVService ]
})
export class TickerTableComponent {
    constructor(private service: AlphaVService) {
        let quote = service.getQuote('GOOG');   
        console.log(quote);
    }
}

