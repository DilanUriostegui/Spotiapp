import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log('Spotify serve listo');
   }

   getQuery( query:string ){
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_4TBkUD_z4IUw6-1DRDaW92gDkjUXigafRF2t9Zb_ZzlnlvMtyGSsOPWbL1F4pY4NxkaXrGfKNIi28-s'
      });

      return this.http.get(url, { headers });
   }

   getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));

    }

   getArtista( termino:string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));

   }
}
