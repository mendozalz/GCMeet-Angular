import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAgregarPersonas'
})
export class FilterAgregarPersonasPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
