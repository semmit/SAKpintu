import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    tanggal: string;
    name: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 1,
            tanggal: "Order Tgl. 12/09/2019 Jam 11:25:10",
            name: "Nama Toko Penjual",
            description: "Semarang"
        },
        {
            id: 2,
            tanggal: "Order Tgl. 10/09/2019 Jam 22:50:50",
            name: "Gihon Sukses Makmur",
            description: "Semarang"
        }
        ,
        {
            id: 3,
            tanggal: "Order Tgl. 12/09/2019 Jam 11:25:10",
            name: "Nama Toko Penjual",
            description: "Semarang"
        },
        {
            id: 4,
            tanggal: "Order Tgl. 10/09/2019 Jam 22:50:50",
            name: "Gihon Sukses Makmur",
            description: "Semarang"
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
