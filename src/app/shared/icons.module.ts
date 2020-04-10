import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faTachometer,
  faEdit,
  faCog,
  faCloudUpload,
  faComments,
  faChartNetwork,
  faBell,
  faSpinner,
  faHeart,
  faMapPin,
  faCloudMoonRain,
  faCloudSun,
  faThunderstormSun,
  faSun,
  faTimes
} from '@fortawesome/pro-light-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChartLine, faTachometer, faEdit, faCog, faCloudUpload,
      faComments, faChartNetwork, faBell, faSpinner, faHeart,
      faMapPin, faCloudMoonRain, faCloudSun, faThunderstormSun,
      faSun, faTimes
    )
  }
}
