import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    src: string;
    namatoko: string;
    namalengkap: string;
    nohandphone: string;
    kotakabupaten: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko",
            namalengkap: "Nama Lengkap",
            nohandphone: "0980980980980980",
            kotakabupaten: "semarang"
        },
        {
            id: 2,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko2",
            namalengkap: "Nama Lengkap2",
            nohandphone: "0980980980980980",
            kotakabupaten: "Purwokerto"
        },
        {
            id: 3,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko3",
            namalengkap: "Nama Lengkap3",
            nohandphone: "0980980980980980",
            kotakabupaten: "Pemalang"
        },
        {
            id: 4,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko4",
            namalengkap: "Nama Lengkap4",
            nohandphone: "0980980980980980",
            kotakabupaten: "Blora"
        },
        {
            id: 5,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko5",
            namalengkap: "Nama Lengkap5",
            nohandphone: "0980980980980980",
            kotakabupaten: "Salatiga"
        },
        {
            id: 6,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko6",
            namalengkap: "Nama Lengkap6",
            nohandphone: "0980980980980980",
            kotakabupaten: "Ungaran"
        },
        {
            id: 7,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko7",
            namalengkap: "Nama Lengkap7",
            nohandphone: "0980980980980980",
            kotakabupaten: "Ambarawa"
        },
        {
            id: 8,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Demak"
        },
        {
            id: 9,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Kudus"
        },
        {
            id: 10,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Klaten"
        },
        {
            id: 11,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Solo"
        },
        {
            id: 12,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Yogyakarta"
        },
        {
            id: 13,
            src: "https://img.icons8.com/plasticine/2x/user.png",
            namatoko: "Nama Toko8",
            namalengkap: "Nama Lengkap8",
            nohandphone: "0980980980980980",
            kotakabupaten: "Magelang"
        },

    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
