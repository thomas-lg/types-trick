import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypescriptUtilsComponent } from './typescript-utils.component';

describe('TypescriptUtilsComponent', () => {
  let component: TypescriptUtilsComponent;
  let fixture: ComponentFixture<TypescriptUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptUtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypescriptUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
