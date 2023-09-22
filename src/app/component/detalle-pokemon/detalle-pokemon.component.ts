import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnChanges {

  @Input() pokemon?:Pokemon;
  @Input() abierto:boolean=false;
  @Output() clicked= new EventEmitter();

  descripcion:string = "";
  

  constructor (private PokemonService:PokemonService)
  {}
  
  ngOnChanges(): void {
    if (this.pokemon){
    this.PokemonService.getDescripcion(this.pokemon?.id).then (res=>{
      this.descripcion = res
     
    })
    }
   
  }
   
  
  }