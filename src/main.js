"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Inventory_1 = __importDefault(require("./Inventory"));
//Inventory class instance
const inventory = new Inventory_1.default();
//add item to the inventory
const item1 = { id: 1, name: 'Laptop', quantity: 10 };
const item2 = { id: 2, name: 'Mouse', quantity: 25 };
const item3 = { id: 3, name: 'Keyboard', quantity: 15 };
inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
//List all items
console.log('Inventory List: ');
inventory.listItems();
//remove an item 
inventory.removeItem(2);
//List all items after removal
console.log('Inventory List After removal: ');
inventory.listItems();
