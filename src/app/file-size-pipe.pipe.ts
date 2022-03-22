import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {
  transform (value: string): string { 
      let fen =  value.split(' ')
      for (let j=0; j<fen.length; j++){
        let arr1=fen[j].split('')
       for (let i=0; i<arr1.length; i++){ 
        if (i%2==0){
          arr1[i]=arr1[i].toUpperCase()
          }
          else  
          {
            arr1[i]=arr1[i].toLowerCase()

          }
          fen[j]=arr1.join('') 
    } 
    value =fen.join(' ')
  }

   
return value
  }
}
  
