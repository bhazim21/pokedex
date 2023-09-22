import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPokemonComponent } from './foto-pokemon.component';

describe('FotoPokemonComponent', () => {
  let component: FotoPokemonComponent;
  let fixture: ComponentFixture<FotoPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoPokemonComponent]
    });
    fixture = TestBed.createComponent(FotoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
