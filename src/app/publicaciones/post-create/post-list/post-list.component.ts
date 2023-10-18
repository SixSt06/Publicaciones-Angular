import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import { Subscribable, Subscription } from "rxjs";
import { Post } from "../../post.model";
import { PostService } from "../../post.service";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostlistComponent implements OnInit, OnDestroy{
  /*
posts= [
  {title:"mi primer post", content:"este es el contenido1"},
  {title:"mi primer post", content:"este es el contenido2"},
  {title:"mi primer post", content:"este es el contenido3"},
]
*/
posts: Post[] = [];
isLoading = false;

private postsSub: Subscription;

constructor(public postsService: PostService){}

ngOnInit(){

  this.isLoading = true;

  this.postsService.getPosts();

  this.postsSub = this.postsService.getPostsUpdateListener()

  .subscribe((posts: Post[]) =>{
    this.isLoading = false;

    this.posts = posts;

  });

}



onDelete(postId: string){

  this.postsService.deletePost(postId);

}



ngOnDestroy(){

  this.postsSub.unsubscribe();

}

}
