export class PriceHelper {
  static format(netPrice: number, currencyCode: string): string {
    return `${netPrice}${currencyCode.toLocaleUpperCase()}`;
  }
}
