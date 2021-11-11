const request = require("request");

const base_url = 'http://localhost:8081/';
const contacts_url = base_url + 'contacts?lastname=Smith';

describe("First Node Test Server", () => {
    describe("GET /contacts?lastname=<name>", () => {
        it("returns Smith", (done) => {
            request.get(contacts_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Smith");
                done();
            });
        });
        // when searching for unknow contact return 404
        it("returns 404", (done) => {
            request.get(base_url + 'contacts?lastname=Washington', 
                (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
            });
        });
        // when using wrong search key word return 500
        it("returns 500 when searching for cell phone", (done) => {
            request.get(base_url + 'contacts?cellphone=%2B000001', 
                (error, response, body) => {
                    expect(response.statusCode).toBe(500);
                    done();
            });
        });
    });
    describe("GET /contact/lastname/:lastname", () => {
        it("returns Smith", function (done) {
            request.get(base_url + "contact/lastname/Smith", 
                (error, response, body) => {
                    expect(body).toBeTruthy();
                    expect(body).toContain("Smith");
                    done();
            });
        });
        // when searching for unknow contact return 404
        it("returns 404 with unknow name", (done) => {
            request.get(base_url + 'contact/lastname/Washington', 
                (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
            });
        });
        // when searching with unknown path return 404
        it("returns 404 with unknow path", (done) => {
            request.get(base_url + 'contact/firstname/John', 
                (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
            });
        });
    });
});