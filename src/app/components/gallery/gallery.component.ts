import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public onClick(element: MouseEvent) {
    var image = <HTMLImageElement>document.getElementById("img01");
    var clickedImage = <HTMLImageElement>element.toElement.lastChild;
    image.src = clickedImage.currentSrc.replace("images", "images/large");

    document.getElementById("img01").style.maxHeight = "100%";
    document.getElementById("img01").style.maxWidth = "100%";

    document.getElementById("modal01").style.display = "block";
    document.getElementById("modal01").style.height = "100%";
  }

  public ngOnInit() {
  }
}