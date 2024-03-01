import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeguardsComponent } from './typeguards.component';

describe('TypeguardsComponent', () => {
  let component: TypeguardsComponent;
  let fixture: ComponentFixture<TypeguardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeguardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeguardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
