
export interface bookCard{/*интерфейс для сета карточки */
    id: number;
    title: string;
    description: string;
  }


  export interface bookEdit {/*интерфейс для сета где лежит тираж , дата релиза */
    id: number;
    releaseDate: string;
    qtyRelease: number;
  }
  
  export interface bookInfo extends bookCard, bookEdit {}
  