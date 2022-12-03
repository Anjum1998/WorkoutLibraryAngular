import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  author=""
  description=""
  publisher=""
  language=""
  year=""
  distributor=""
  price=""
  upload=""

  dataBind=()=>
  {
    let data:any={"title":this.title,"author":this.author,"description":this.description,"publisher":this.publisher,
    "language":this.language,"year":this.year,"distributor":this.distributor,"price":this.price,"upload":this.upload}
    console.log(data)
    this.author=""
    this.title=""
    this.description=""
    this.publisher=""
    this.language=""
    this.year=""
    this.distributor=""
    this.price=""
    this.upload=""
  }
}
