import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BestiaryComponent } from './pages/bestiary/bestiary.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { CenterBackgroundComponent } from './components/center-background/center-background.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BestiaryComponent,
    AppNavComponent,
    CenterBackgroundComponent,
    CharacterComponent,
    LocationsComponent,
    InstructionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
