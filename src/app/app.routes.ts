import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './components/Directives/structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './components/Directives/structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './components/Directives/structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';
import { SignalsComponent } from './components/signals/signals.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './components/Pipes/built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './components/Forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: UserComponent },
    // {path:'',redirectTo:'user',pathMatch:'full'},
    { path: 'user', component: UserComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'ngif', component: StructuralDirectiveNgifVsIfComponent },
    { path: 'ngfor', component: StructuralDirectiveNgforVsForComponent },
    { path: 'ngswitch', component: StructuralDirectiveNgswitchVsSwitchComponent },
    { path: 'attribute-directives', component: AttributeDirectivesComponent },
    { path: 'signal', component: SignalsComponent },
    { path: 'linked-signal', component: LinkedSignalComponent },
    { path: 'built-in-pipes', component: BuiltInPipesComponent },
    { path: 'TDF', component: TemplateDrivenFormComponent },
    {path:'reactive-form',component:ReactiveFormComponent},
    {path:'profile',component:ProfileComponent},
    { path: '**', component: PageNotFoundComponent },

];
