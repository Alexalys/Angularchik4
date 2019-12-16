import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BookService,Book} from "./book.service";
@Component({
    selector: 'book-info',
    template: `<table>
        <tr>
            <td>{{id}}</td><td>{{list.name}}</td><td>{{list.author}}</td><td>{{list.year}}</td>
        </tr>
    </table>`
})
export class BookComponent implements OnInit{
    private id: number;
    private list:Book;
    private subscription: Subscription;
    constructor(private activateRoute: ActivatedRoute,private bookServ:BookService){

        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnInit(): void {
            this.list = this.bookServ.getBook(this.id);

    }
    getlist():Book{
        return this.list;
    }
    getId():number{
        return this.id;
    }


}
