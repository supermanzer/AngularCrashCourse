import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// We need to import our components here to allow us to create routes for them
import { HomeComponent} from "./home/home.component";
import { ListComponent} from "./list/list.component";


// This array defines the routes or links we can use in our app to navigate around.
const routes: Routes = [
  {path: '', component: HomeComponent}, // This defines our first component
  {path: 'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
