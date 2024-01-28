import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "iPhone14",
      description:" The latest flagship smartphone from Apple, featuring cutting-edge technology, an advanced camera system, and the latest iOS version.",
      creator:"Apple Inc.",
      imgURL:"https://static.digitecgalaxus.ch/Files/6/8/2/2/7/9/5/1/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg",
      type:"Smartphone"
    });
    this.contentList.addContent({
      id: 1,
      title: "Samsung Galaxy",
      description:"A powerful and feature-rich Android smartphone from Samsung, known for its vibrant display, high-quality camera, and sleek design.",
      creator:"Samsung Electronics",
      imgURL:"https://i5.walmartimages.com/asr/4014d1d5-2430-46cf-a2b6-526ebf2ff569.7fff876a828d1392c131ee20a014544b.jpeg",
      type:"Smartphone"
    });
    this.contentList.addContent({
      id: 2,
      title: "BlackBerry Z30",
      description:"A classic BlackBerry smartphone known for its physical keyboard and secure communication features, running on the BlackBerry 10 operating system.",
      creator:"BlackBerry Limited",
      imgURL:"https://img.generation-nt.com/0901568372.jpg",
      type:"Smartphone"
    });
  }
}