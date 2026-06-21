import { Component } from '@angular/core';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectiveNgifVsIfComponent } from './components/Directives/structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from './components/Directives/structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './components/Directives/structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './components/Directives/attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    // StructuralDirectiveNgifVsIfComponent,
    // StructuralDirectiveNgforVsForComponent,
    // StructuralDirectiveNgswitchVsSwitchComponent,
    AttributeDirectivesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19-tutorial';
}
