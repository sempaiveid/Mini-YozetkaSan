import { Component } from '@angular/core';
import { ProductTileComponent } from '../../components/product-tile/product-tile.component';
import { AdsComponent } from '../../components/ads/ads.component';

@Component({
  selector: 'app-home',
  imports: [ProductTileComponent,AdsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
