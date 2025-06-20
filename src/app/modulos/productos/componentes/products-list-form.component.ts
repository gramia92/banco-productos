
import { Component, OnInit } from '@angular/core';
import { Product } from '../modelos/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list-form',
  templateUrl: './products-list-form.component.html',
  styleUrls: ['./products-list-form.component.css']
})
export class ProductsListFormComponent implements OnInit {

  products: Product[] = [];
  searchTerm = '';
  itemsPerPage = 5;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.getAll().subscribe({
      next: (res) => {
        this.products = res;
      }
    });
  }

  // Devuelve los productos filtrados por búsqueda
  get filteredProducts(): Product[] {
    if (!this.products) return [];
    const searchTerm = (this.searchTerm || '').toLowerCase();

    //const term = this.searchTerm.toLowerCase().trim();
    return this.products.filter(p =>
      (p.name || '').toLowerCase().includes(searchTerm) ||
      (p.description || '').toLowerCase().includes(searchTerm) ||
      (p.id || '').toLowerCase().includes(searchTerm)
    );
  }

  // Devuelve los productos filtrados y paginados
  get paginatedProducts(): Product[] {
    return this.filteredProducts.slice(0, this.itemsPerPage);
  }

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    return parts.map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }

}
