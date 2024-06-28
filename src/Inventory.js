"use strict";
//Inventory class 
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    listItems() {
        this.items.forEach(item => {
            console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`);
        });
    }
}
exports.default = Inventory;
