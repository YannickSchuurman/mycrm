import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => ({
        firstname: "Yannick",
        lastname: "Schuurman",
        age: "25",
        telephoneNumber: "06-83659544",
        company: "Bedrijf B.V.",
        email: "yannick.schuurman@hotmail.com",
        leadDate: "01-04-2020",
        leadSource: "Website",
        gender: "Man",
        address: {
            streetname: "Terwoldseweg",
            housenumber: "2",
            zipcode: "7391TC",
            City: "Twello",
            country: "Nederland",
        },
        function: "Commercieel manager",
        lastcontacted: "15-12-2021",
        nextcontactmoment: "15-04-2022",
        recentactivities: [
            {
                type: "phone",
                date: "01-05-2021",
                time: "12:13",
                user: "Angelique van Aalderen",
            },
            {
                type: "note",
                date: "22-05-2021",
                time: "14:22",
                user: "Johannes Romein",
            },
            {
                type: "phone",
                date: "24-05-2021",
                time: "11:55",
                user: "Angelique van Aalderen",
            },
        ],
    }),
});

// interface ModuleDataState {
//     breadcrumbs?: Breadcrumb[]
//     menu?:MenuItem[]
// }
//
// interface Breadcrumb  {
//     dbpath: string
//     documentUnid: string
//     enableDocumentSummary: boolean
//     label: string
//     link: string
//     openInDialog: boolean
// }
//
//
// export const useModuleDataStore = defineStore('moduleData', {
//     state: (): ModuleDataState => ( <ModuleDataState>{
//     breadcrumbs: [],
//     menu:[]
// }),
//     actions: {
//         setModuleData(payload:ModuleDataState) {
//         this.breadcrumbs = payload.breadcrumbs;
//         this.menu = payload.menu;
//     }
//     }
//     })
