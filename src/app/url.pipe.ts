import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {
  transform(value: string):any {
    return `http://www.imdb.com/title/${value}`

  }
}
