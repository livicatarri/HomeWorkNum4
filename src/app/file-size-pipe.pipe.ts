import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {
  transform (value: string): string { 
      let fen =  value.split(' ')
      console.log(fen)
      for (let j=0; j<fen.length; j++){
        let arr1=fen[j].split('')
        console.log(arr1)
       for (let i=0; i<arr1.length; i++){
        //if (fen[i]!==' '){      
        if (i%2==0){
          arr1[i]=arr1[i].toUpperCase()
          console.log(arr1[i])
          }
          else  
          {
            arr1[i]=arr1[i].toLowerCase()
            console.log(arr1[i])
          }
          fen[j]=arr1.join('')
     // }
     
    } 
    value =fen.join(' ')
  }

   
return value
  }
}
  
