import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../shared/service/products.service';
import { ConfirmationDialogService } from '../../shared/service/confirmation-dialog.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products']);
  productService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService.openDialog()
    .pipe(filter((answer) => answer === true))
      .subscribe(() => {        
          this.productService.delete(product.id).subscribe(() => {
            this.productService.getAll().subscribe((products) => {
              this.products.set(products);
            });
          });
        }                  
      );
  }
}
