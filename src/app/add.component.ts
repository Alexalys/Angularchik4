import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BookService,Book} from "./book.service";

@Component({
    selector: 'add-book',
    template: `<div>
        <h3>Параметры объекта</h3>
        <input type="number" [(ngModel)]="id"  class="form-control" placeholder="ID"/><br />
        <input [(ngModel)]="name"    placeholder="Name" /><br />
        <input [(ngModel)]="author"   placeholder="Author" /><br />
        <input type="number" [(ngModel)]="year"  class="form-control" placeholder="Year"/><br />
        <button (click)="createBook()" class="btn">Create</button>
    </div>`
})
export class AddComponent {

    private id=0;
    private year=0;
    private name="";
    private  author="";
    constructor(private bookService:BookService) {}
    createBook(){
        this.bookService.addBook(this.id,this.name,this.author,this.year);
        console.log(Object.keys(this.bookService).length);
    }
}
