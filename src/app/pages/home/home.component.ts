import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  listaPokemon: Resultado[] = [];

  pagina: number = 1;
  cargando: boolean = false;
  pokemonSeleccionado?: Pokemon
  detalle:boolean=false;



  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1")

  }

  async cargarLista() {
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getBypage(this.pagina)];
    this.cargando = false;
    this.pagina++;
  }

  onScroll(e: any) {

    if (this.cargando) return;
    if (
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )
      === e.srcElement.scrollHeight) {
      this.cargarLista();
    }

  }

  async tarjetaclickeada(id: string) {

    if(this.pokemonSeleccionado && id===this.pokemonSeleccionado.id.toString()){
      return this.cambiarEstado()
    }

    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

  cambiarEstado(){
    if(this.pokemonSeleccionado) this.detalle = !this.detalle
    console.log(this.detalle)
  }

}
