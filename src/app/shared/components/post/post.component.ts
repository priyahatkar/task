import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';
import { posts } from '../../const/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // public bgColor: string = "orange"
  public postArray !: Array<Ipost>
  constructor() { }

  ngOnInit(): void {
    this.postArray =  posts
    console.log(this.postArray)
  }


}
