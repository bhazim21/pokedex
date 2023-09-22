import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokemonComponent } from './detalle-pokemon.component';

describe('DetallePokemonComponent', () => {
  let component: DetallePokemonComponent;
  let fixture: ComponentFixture<DetallePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePokemonComponent]
    });
    fixture = TestBed.createComponent(DetallePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
