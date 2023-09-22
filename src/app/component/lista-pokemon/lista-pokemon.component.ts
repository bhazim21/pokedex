import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent  implements OnChanges{

constructor(private pokemonService:PokemonService){}

  ngOnChanges(): void {
  this.extraerInformacion()

  }

  

  @Input() data?:Resultado;
  @Input() Seleccionado:boolean = false;
  @Input()fullData?:Pokemon;
  @Output()Clickleado = new EventEmitter<string>()
  id:string = "0";

  extraerInformacion(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1);
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
      this.data = {
        name:this.fullData.species.name,
        url: ""
      }
    }

  }
}
