import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @Output() componentSelected =new EventEmitter<string>();

    onSelectRecipe(){
        this.componentSelected.emit('recipe');
    }

    onSelectShoppingList(){
        this.componentSelected.emit('shopping-list');
    }
}