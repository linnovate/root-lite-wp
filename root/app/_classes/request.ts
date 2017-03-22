export class Request {
    constructor(
       public name: string,
       public title: string,
       public description: string,
       public status: string,
       public due: string,
       public _id: string
    ) { }

    getStatusColor() {
        switch (this.status) {
            case "review":
            return '#8DC63F';
            case "in-progress":
            return '#00AEEF';
            case "rejected":
            return '#F06EAA';
            default:
            return '#8DC63F';
        }
    }

}
