export class PriceHelper {
  static format(netPrice: number, currencyCode: string): string {
    return `${netPrice.toFixed(2)}${currencyCode.toLocaleUpperCase()}`;
  }
}
