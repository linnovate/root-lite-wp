
export class Request {
    constructor(
       public name: string,
       public title: string,
       public description: string,
       public status: string,
       public date: string
    ) { }
    getStatusColor() {
        switch (this.status) {
            case "completed":
            return '#8DC63F';
            case "received":
            return '#00AEEF';
            case "active":
            return '#F06EAA';
            default:
            return '#8DC63F';
        }
    }

}