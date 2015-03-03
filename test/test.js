var expect = require('chai').expect;
var add = require("../add.js");

describe('add', function() {
    it('teszteljuk a paramtereket', function() {
        var result = add(1,2);
        expect(result).to.eql(3);
    });
});	