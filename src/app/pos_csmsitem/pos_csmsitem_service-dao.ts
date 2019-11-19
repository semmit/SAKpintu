import { Injectable } from "@angular/core";

import { Item } from "./pos_csmsitem_service-int";

@Injectable({
    providedIn: "root",
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 2, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 3, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 4, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 5, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 6, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 7, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 8, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 9, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 10, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 11, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 12, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 13, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 14, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 15, name: "Nama Item", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
