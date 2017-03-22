"use strict";
var Request = (function () {
    function Request(name, title, description, status, date) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.status = status;
        this.date = date;
    }
    Request.prototype.getStatusColor = function () {
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
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=request.js.map