/*global describe, it*/

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../../app");
let should = chai.should();

chai.use(chaiHttp);

describe("Homepage", function () {
    it("should return a 200 response", function (done) {
        chai.request(app)
            .get("/")
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it("should display the page title", function(done) {
        chai.request(app)
            .get("/")
            .end(function (err, res) {
                res.text.includes("iSite Dashboard").should.equal(true);
                done();
            });

    })
});