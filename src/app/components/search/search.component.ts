import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  constructor( private spotify:SpotifyService ) { }

  artistas: any[] = [];
  loading: boolean;

  buscar( termino: string){
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas( termino )
     .subscribe ((data:any) =>{
        console.log(data);
        this.artistas = data;
        this.loading = false;
     });
  };
  

}
