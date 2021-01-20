import { Component, OnInit } from '@angular/core';
import { NewsPagesService } from '../news-pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
articles:any
  constructor(private newsPagesService:NewsPagesService) {
    this.loadNews()
   }
loadNews(){
  this.newsPagesService.getNews("top-headlines?country=us").subscribe( news =>{
    this.articles = news['articles'];
    console.log(this.articles)
  })
}
  ngOnInit() {
  }

}
