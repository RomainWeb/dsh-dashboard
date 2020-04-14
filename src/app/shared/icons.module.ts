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
  faTimes,
  faAnalytics,
  faUserLock,
  faArrowCircleLeft,
  faEnvelope,
  faKey,
  faTemperatureLow,
  faBolt,
  faSmog,
  faCalendarDay,
  faChargingStation,
  faLeafHeart,
  faTemperatureHot,
} from '@fortawesome/pro-light-svg-icons';

import { faFacebook, faGooglePlus, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faCaretUp as fasCaretUp, faCaretDown as fasCaretDown } from '@fortawesome/pro-solid-svg-icons';

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
      faSun, faTimes, faAnalytics, fasCaretDown, fasCaretUp, faUserLock,
      faArrowCircleLeft, faEnvelope, faKey, faFacebook, faGooglePlus,
      faTwitter, faGithub, faTemperatureLow, faBolt, faSmog, faCalendarDay,
      faChargingStation, faLeafHeart, faTemperatureHot
    )
  }
}
