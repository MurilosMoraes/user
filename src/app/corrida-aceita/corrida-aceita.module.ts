import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorridaAceitaPageRoutingModule } from './corrida-aceita-routing.module';

import { CorridaAceitaPage } from './corrida-aceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorridaAceitaPageRoutingModule
  ],
  declarations: [CorridaAceitaPage]
})
export class CorridaAceitaPageModule {}
