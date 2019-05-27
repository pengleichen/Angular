import { Pipe, PipeTransform } from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent?: string): number {
    if (!value || Number.isNaN(value)) {
      return 0;
    }
    let exp = Number.parseFloat(exponent);
    return value ** (Number.isNaN(exp) ? 1 : exp);
  }

}
