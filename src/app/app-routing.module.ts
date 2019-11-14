import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LauncherComponent } from './components/launcher/launcher.component';
import { Clients } from './clients/clients';


const appRoutes: Routes = [
  { path: 'launcher', component: LauncherComponent},
  { path: 'chatbot', component: ChatbotComponent},
  { path: '', redirectTo: 'launcher', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private _clients: Clients,
    private _router:Router){
      this.resetRouteConfig();
  }


  resetRouteConfig(){
    this._clients.getAvailableThemes().forEach(element => {
        this._router.config.push(
            { path: 'chatbot/'+element.id, component: ChatbotComponent }
        );
    });
    // setting fallback route after configuring all client routes
    this._router.config.push(
      { path: '**', redirectTo: 'launcher', pathMatch:'full' }
  );
    
}
}
