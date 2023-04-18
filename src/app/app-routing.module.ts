import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BestiaryComponent } from './pages/bestiary/bestiary.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'board', component: BoardComponent },
  { path: 'bestiary', component: BestiaryComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'lacations', component: LocationsComponent },
  { path: 'instruction', component: InstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
