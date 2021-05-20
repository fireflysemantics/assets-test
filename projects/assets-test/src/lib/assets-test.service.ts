import { Injectable } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';
import { AssetsModule } from './assets-test.module'; 

interface Asset {
  name:string
  url:string
}

interface KeyAsset {
  [key: string]: Asset
}
export const SVG:KeyAsset = {
  GOOGLE_LOGO: {
      name: 'google_logo',
      url: 'https://fireflysemantics.github.io/logo/Google.svg'
  }
}

@Injectable({
  providedIn: AssetsModule
})
export class AssetService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    {
      Object.keys(SVG).forEach(k=>{
        this.matIconRegistry.addSvgIcon(
          SVG[k].name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(SVG[k].url));  
      })
    }
  }
}