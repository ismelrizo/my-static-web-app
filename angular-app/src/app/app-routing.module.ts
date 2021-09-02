import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeFourComponent } from './components/home-four/home-four.component';
import { HomeFiveComponent } from './components/home-five/home-five.component';
import { HomeSixComponent } from './components/home-six/home-six.component';
import { HomeSevenComponent } from './components/home-seven/home-seven.component';
import { HomeEightComponent } from './components/home-eight/home-eight.component';
import { HomeNineComponent } from './components/home-nine/home-nine.component';
import { HomeTenComponent } from './components/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/home-thirteen/home-thirteen.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-2', component: HomeTwoComponent},
    {path: 'home-3', component: HomeThreeComponent},
    {path: 'home-4', component: HomeFourComponent},
    {path: 'home-5', component: HomeFiveComponent},
    {path: 'home-6', component: HomeSixComponent},
    {path: 'home-7', component: HomeSevenComponent},
    {path: 'home-8', component: HomeEightComponent},
    {path: 'home-9', component: HomeNineComponent},
    {path: 'home-10', component: HomeTenComponent},
    {path: 'home-11', component: HomeElevenComponent},
    {path: 'home-12', component: HomeTwelveComponent},
    {path: 'home-13', component: HomeThirteenComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }