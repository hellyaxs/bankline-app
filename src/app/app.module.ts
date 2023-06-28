import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CorrentistasComponent } from './components/correntistas/correntistas.component';
import  localesPt  from '@angular/common/locales/pt';
import { LoginComponent } from './login/login.component';

registerLocaleData( localesPt )

@NgModule({
  declarations: [
    AppComponent,
    MovimentacaoListComponent,
    MovimentacaoNewComponent,
    CorrentistasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule

  ],
  providers: [{provide:LOCALE_ID,useValue:"pt-BR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }


