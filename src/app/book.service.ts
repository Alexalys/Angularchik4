export interface Book{
    name:string;
    author:string;
    year:number;
}
export class BookService{

    books:{[id:number]:Book;}={};
    addBook(id:number,name1: string,author1:string,year1:number){
        let flag=false;
        for(let key in this.books){
            if(+key==id){
                flag=true;
            }
        }
        if(flag==false) {
            this.books[id] = {name: name1, author: author1, year: year1};
        }
    }
    getBook(id:number){
        return this.books[id];

    }
    getBooks(){
        return this.books;
    }

}
