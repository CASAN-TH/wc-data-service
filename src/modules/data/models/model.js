'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
    slug: {
        type: String
    },
    description: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

var DataContinents = new Schema({
    code: {
        type: String
    },
    name: {
        type: String
    },
    countries: {
        type: [{
            code: {
                type: String
            },
            currency_code: {
                type: String
            },
            currency_pos: {
                type: String
            },
            decimal_sep: {
                type: String
            },
            dimension_unit: {
                type: String
            },
            name: {
                type: String
            },
            num_decimals: {
                type: Number
            },
            states: {
                type: [{
                    code: {
                        type: String
                    },
                    name: {
                        type: String
                    }
                }]
            },
            thousand_sep: {
                type: String
            },
            weight_unit: {
                type: String
            }
        }]
    }
})

mongoose.model("Data", DataSchema);
mongoose.model("Continents", DataContinents);