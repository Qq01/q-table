import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'makeSafe'
})
export class MakeSafePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer,
  ){}

  transform(value: any, args?: any): any {
    if (args == 'style') {
      return this.sanitizer.bypassSecurityTrustStyle(value);
    } else if (args == 'html') {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    return value;
  }

}
