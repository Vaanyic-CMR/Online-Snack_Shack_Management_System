const AccountController = require("../controllers/account.contoller");

module.exports = app => {
    app.get("/api/accounts", AccountController.getAllAccounts );
    app.get("/api/accounts/:id", AccountController.getAccount );
    app.delete("/api/accounts/:id", AccountController.deleteAccount );
};