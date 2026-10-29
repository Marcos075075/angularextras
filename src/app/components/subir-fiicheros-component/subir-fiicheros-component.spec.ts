import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirFiicherosComponent } from './subir-fiicheros-component';

describe('SubirFiicherosComponent', () => {
  let component: SubirFiicherosComponent;
  let fixture: ComponentFixture<SubirFiicherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubirFiicherosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubirFiicherosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
