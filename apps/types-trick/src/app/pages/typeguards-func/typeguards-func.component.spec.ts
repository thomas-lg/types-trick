import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeguardsFuncComponent } from './typeguards-func.component';

describe('TypeguardsFuncComponent', () => {
  let component: TypeguardsFuncComponent;
  let fixture: ComponentFixture<TypeguardsFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeguardsFuncComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeguardsFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
