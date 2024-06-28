//Inventory class 

import { Item } from "./Item";

class Inventory {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    listItems(): void {
        this.items.forEach(item => {
            console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`);
        });
    }
}

export default Inventory;