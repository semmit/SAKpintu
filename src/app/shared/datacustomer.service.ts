import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    src: string;
    namatoko: string;
    namalengkap: string;
    nohandphone: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko",
            namalengkap: "Nama Lengkap",
            nohandphone: "0980980980980980"
        },
        {
            id: 2,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko2",
            namalengkap: "Nama Lengkap2",
            nohandphone: "0980980980980980"
        },
        {
            id: 3,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko3",
            namalengkap: "Nama Lengkap3",
            nohandphone: "0980980980980980"
        },
        {
            id: 4,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko4",
            namalengkap: "Nama Lengkap4",
            nohandphone: "0980980980980980"
        },
        {
            id: 5,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko5",
            namalengkap: "Nama Lengkap5",
            nohandphone: "0980980980980980"
        },
        {
            id: 6,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko6",
            namalengkap: "Nama Lengkap6",
            nohandphone: "0980980980980980"
        },
        {
            id: 7,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko7",
            namalengkap: "Nama Lengkap7",
            nohandphone: "0980980980980980"
        },
        {
            id: 8,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },
                {
            id: 9,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },
                {
            id: 10,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },
                {
            id: 11,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },
                {
            id: 12,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },
                {
            id: 13,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
