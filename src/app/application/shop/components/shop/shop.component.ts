import { ShopService } from '../../state/shop.service';
import { ShopQuery } from '../../state/shop.query';
import { Shop } from '../../model/shop.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  shops$: Observable<Shop[]>;

  displayedColumns: string[] = ['shop'];
  formShop = new FormControl('', [Validators.required]);

  deleteAction = false;

  constructor(
    public service: ShopService,
    public query: ShopQuery,
    public router: Router
  ) {}

  ngOnInit() {
    this.service.syncCollection().subscribe();
    this.shops$ = this.query.selectAll();
  }

  public addShop() {
    this.service.add({
      name: this.formShop.value,
      owner: [],
      image: '',
      products: [],
    });
    this.formShop.reset();
  }

  public selectShop(id: ID) {
    if (this.deleteAction) {
      //Si lo que se ha pulsado es el botón de eliminar
      this.deleteAction = false;
    } else {
      this.service.setActive(id);
      this.router.navigate(['products']);
      console.log('seleccionada +id' + id);
    }
  }

  public delete(shopId) {
    this.service.remove(shopId);
    console.log('Se ha eliminado:' + shopId);
    this.deleteAction = true;
  }
}
