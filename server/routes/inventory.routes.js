const InventoryController = require("../controllers/inventory.controller");

module.exports = app => {
    app.get("/api/inventory", InventoryController.getAll );
    app.post("/api/inventory", InventoryController.create );
    app.get("/api/inventory/:id", InventoryController.getOne );
    app.put("/api/inventory/:id", InventoryController.update );
    app.delete("/api/inventory/:id", InventoryController.delete );
};