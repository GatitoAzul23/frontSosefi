import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  private selectedProductSource = new BehaviorSubject<string>('');
  selectedProduct$ = this.selectedProductSource.asObservable();

  constructor() { }

  // setSelectedProduct(productName: string, modelo:string, numero:string) {
  //   this.selectedProductSource.next(productName,modelo,numero);
  // }
}
