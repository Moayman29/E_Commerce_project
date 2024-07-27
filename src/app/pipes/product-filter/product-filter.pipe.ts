import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products:any[]): any[] {
    return products.filter((product)=>product.count>0);
  }

}
