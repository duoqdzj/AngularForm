export class Poll{
// modelis skirtas sukurti objektui, ts gudrybe rasyti kintamuosius tiesiai i construktoriu
    constructor(
        public id:number,
        public name:string,
        public surname:string,
        public email:string,
        public phone:string,
        public radio1:string,
        public radio2:string,
        public radio3:string

    ){

    }
}