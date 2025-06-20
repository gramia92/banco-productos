
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListFormComponent } from './products-list-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

describe('ProductsListFormComponent', () => {
  let component: ProductsListFormComponent;
  let fixture: ComponentFixture<ProductsListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListFormComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ProductService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cargarProductos on init', () => {
    const spy = jest.spyOn(component, 'cargarProductos');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
