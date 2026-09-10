import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuralRecados } from './muralrecados';

describe('Muralrecados', () => {
  let component: MuralRecados;
  let fixture: ComponentFixture<MuralRecados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralRecados],
    }).compileComponents();

    fixture = TestBed.createComponent(MuralRecados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
