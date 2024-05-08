import { Component } from '@angular/core';
import { LaptopComponent } from '../laptop/laptop.component';
import { PcComponent } from '../pc/pc.component';
import { MonitoryComponent } from '../monitory/monitory.component';
import { GamingComponent } from '../gaming/gaming.component';
import { TabletsComponent } from '../tablets/tablets.component';
import { CablesComponent } from '../cables/cables.component';
import { ComponentsComponent } from '../components/components.component';
import { NetComponent } from '../net/net.component';
import { HeadphonesComponent } from '../headphones/headphones.component';
import { ClaviaturComponent } from '../claviatur/claviatur.component';
import { AksesuariComponent } from '../aksesuari/aksesuari.component';
import { OfisComponent } from '../ofis/ofis.component';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [LaptopComponent, PcComponent, MonitoryComponent, GamingComponent, 
    TabletsComponent, CablesComponent, ComponentsComponent, NetComponent, HeadphonesComponent,
    ClaviaturComponent, AksesuariComponent, OfisComponent],  
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {

}
