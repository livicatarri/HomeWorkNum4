import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {

  transform (value: string): string { 
      let fen =  value.split('');
      for (let i=0; i<fen.length; i++){
          if (i%2==0){
          fen[i]=fen[i].toUpperCase()
          }else{
              fen[i]=fen[i].toLowerCase()
          }
         value = fen.join('')
      }
    
  return value
  }

  }


