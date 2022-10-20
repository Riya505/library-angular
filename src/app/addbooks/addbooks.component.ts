import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bookTitle=""
  description=""
  author=""
  editionNumber=""


  readValue=()=>{
    let data={
      "bookTitle":this.bookTitle,
      "description":this.description,
      "author":this.author,
      "editionNumber":this.editionNumber
    }
    console.log(data)
    this.myapi.addBook(data).subscribe(
      (response)=>{
        console.log(response)
        alert("added")
      }
    )
  }

  ngOnInit(): void {
  }

}
