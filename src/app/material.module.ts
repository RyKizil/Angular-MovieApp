import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule, MatSidenavModule, MatCardModule, MatExpansionModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule, MatSidenavModule, MatCardModule, MatExpansionModule, MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule, MatSidenavModule, MatCardModule, MatExpansionModule, MatInputModule],
})

export class MaterialModule{

}