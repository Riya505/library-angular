import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bookTitle=""

  readValue=()=>{
    let data={

      "bookTitle":this.bookTitle
    }
    console.log(data)
    this.myapi.searchBook(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[
]

  ngOnInit(): void {
  }

}
