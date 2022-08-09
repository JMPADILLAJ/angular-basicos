import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  })

  export class ListadoComponent  {

    heroes:string[]=['Brock','Roman','Taker','Hulk', 'Gato con botas'];
    public heroeBorrado:string='';

    BorrarHeroe(){
      this.heroeBorrado=this.heroes.shift() || '';
      
    }
}
