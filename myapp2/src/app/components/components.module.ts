import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarComponent } from "./avatar/avatar.component";
import { BtnComponent } from "./btn/btn.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { TitleComponent } from "./title/title.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    UserCardComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent
  ],
})
export class ComponentsModule { }
