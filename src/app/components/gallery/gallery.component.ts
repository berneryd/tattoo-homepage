import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public onClick(element) {
      console.log(element.path[0].childNodes[0].currentSrc);
      console.log(document.getElementById("img01"));
      var image = <HTMLImageElement>document.getElementById("img01");
      image.src = element.path[0].childNodes[0].currentSrc.replace("images", "images/large");
      document.getElementById("img01").style.maxHeight = "100%";
      document.getElementById("img01").style.maxWidth = "100%";

      document.getElementById("modal01").style.display = "block";
      document.getElementById("modal01").style.height = "100%";
  }

  public ngOnInit()
  {
  }
}