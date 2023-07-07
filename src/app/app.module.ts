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
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoardComponent } from './pages/board/board.component';
import { BestiaryMonsterComponent } from './components/bestiary-monster/bestiary-monster.component';
import { LocationsEnviromentComponent } from './components/locations-enviroment/locations-enviroment.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InputComponent } from './components/input/input.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { InputModule } from './components/input/input.module';

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
    CardComponent,
    FooterComponent,
    BoardComponent,
    BestiaryMonsterComponent,
    LocationsEnviromentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TrackerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, InputModule],
  exports: [AppNavComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
