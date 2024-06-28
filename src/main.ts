//main.ts
import { Item } from "./Item";
import Inventory from "./Inventory";


//Inventory class instance
const inventory = new Inventory();

//add item to the inventory
const item1: Item = { id: 1, name: 'Laptop', quantity: 10 };
const item2: Item = { id: 2, name: 'Mouse', quantity: 25 };
const item3: Item = { id: 3, name: 'Keyboard', quantity: 15 };

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