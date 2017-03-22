"use strict";
var Request = (function () {
    function Request(name, title, description, status, due, _id) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.status = status;
        this.due = due;
        this._id = _id;
    }
    Request.prototype.getStatusColor = function () {
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
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=request.js.map