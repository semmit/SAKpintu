import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root",
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Bayam", desc: "BayamBayam", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 2, name: "Kangkung", desc: "KangkungKangkung", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 3, name: "Bawang", desc: "BawangBawang", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 4, name: "Cabe Merah", desc: "Cabe MerahCabe Merah", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 5, name: "Cabe Rawit", desc: "Cabe RawitCabe Rawit", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 6, name: "Kol", desc: "KolKol", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 7, name: "Wortel", desc: "WortelWortel", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 8, name: "Terong", desc: "TerongTerong", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 9, name: "Kacang Panjang", desc: "Kacang Panjang", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 10, name: "Apel", desc: "ApelApel", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 11, name: "Jeruk", desc: "JerukJeruk", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 12, name: "Pepaya", desc: "PepayaPepaya", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 13, name: "Pisang Ambon", desc: "Pisang Ambon", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 14, name: "Semangka", desc: "Semangka", price: "999999", satuan:"pcs", stock: "999999" },
        { id: 15, name: "Melon", desc: "MelonMelonMelon", price: "999999", satuan:"pcs", stock: "999999" },
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
