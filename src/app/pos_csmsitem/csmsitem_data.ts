import { Injectable } from "@angular/core";

export interface csmsitem_dataset {
    id: number;
    name: string;
    desc: string;
    satuan: string;
    price: string;
    stock: string;
}

@Injectable({
    providedIn: "root",
})
export class csms_itemService {
    private datalist = new Array<csmsitem_dataset>(
        { id: 1, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 2, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 3, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 4, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 5, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 6, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 7, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 8, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 9, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 10, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 11, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 12, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 13, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 14, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
        { id: 15, name: "Nama csmsitem_dataset", desc: "aaaaabbbbb yeesss", price: "999999", satuan: "pcs", stock: "999999" },
    );

    getdatalist(): Array<csmsitem_dataset> {
        return this.datalist;
    }

    getItem(id: number): csmsitem_dataset {
        return this.datalist.filter((datalist) => datalist.id === id)[0];
    }
}
