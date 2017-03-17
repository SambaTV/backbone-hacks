Backbone.View.prototype.get = function(prop) {
    return this._meta[prop];
}

Backbone.View.prototype.set = function (prop, value, obj) {
    var trigger = (value != this._meta[prop]);
    this._meta[prop] = value;

    if (trigger) {
        if (obj != undefined) {
            if (obj.silent != true)
                this.trigger("change:"+prop)
        } else {
            this.trigger("change:"+prop)
        }
    }
}