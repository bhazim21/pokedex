import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonComponent } from './lista-pokemon.component';

describe('ListaPokemonComponent', () => {
  let component: ListaPokemonComponent;
  let fixture: ComponentFixture<ListaPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPokemonComponent]
    });
    fixture = TestBed.createComponent(ListaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
