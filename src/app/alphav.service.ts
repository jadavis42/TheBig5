export class AlphaVService {

    getQuote(symbol: String): String {
        console.log('getting quote: ' + symbol);
        return '98.75';
    }
}