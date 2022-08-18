pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("people");
})
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("Body is correct", function () {
    pm.response.to.have.body("19BBY");
});