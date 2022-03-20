export interface BooksAllData {//интерфейс input.json
  set1: {
    data: bookCard[];
  };
  set2: {
    data: bookEdit[];
  };
}
export interface bookCard{
    id: number;
    title: string;
    description: string;
  }

  export interface bookEdit{
    id: number;
    releaseDate: string;
    qtyRelease: number;
  }
  export interface bookInfo {//связанные сеты  с помощью id 
    title: string;
    description: string;
    releaseDate: string;
    id: number;
    qtyRelease: number;
  }
  
