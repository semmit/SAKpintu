import { Injectable } from "@angular/core";

export interface Item {
    id: number;
    src: string;
    name: string;
    desc: string;
    satuan: string;
    price: string;
    stock: string;
}

@Injectable({
    providedIn: "root",
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai%20bola%20hijau.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 2, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai03.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 3, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai bola emas.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 4, src: "https://sp.haloteman.com/_img/sampleprod/lowres/palata.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 5, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai04.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 6, src: "https://sp.haloteman.com/_img/sampleprod/lowres/ciok o.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 7, src: "https://sp.haloteman.com/_img/sampleprod/lowres/ragi tempe.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 8, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai%20bola%20hijau.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 9, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai03.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 10, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai bola emas.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 11, src: "https://sp.haloteman.com/_img/sampleprod/lowres/palata.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 12, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai04.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 13, src: "https://sp.haloteman.com/_img/sampleprod/lowres/ciok o.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 14, src: "https://sp.haloteman.com/_img/sampleprod/lowres/ragi tempe.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 15, src: "https://sp.haloteman.com/_img/sampleprod/lowres/kedelai%20bola%20hijau.jpg", name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
