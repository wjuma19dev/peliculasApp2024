import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.theMovieImagePath;

@Pipe({ name: 'imagen' })
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, width: string='w500'): string {

    if(!imagen) {
      return './assets/images/no-imagen-banner.jpg';
    }

    return `${URL}/${width}/${imagen}`;
  }

}
