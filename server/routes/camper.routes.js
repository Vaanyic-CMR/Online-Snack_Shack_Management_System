const CamperController = require("../controllers/camper.controller");

module.exports = app => {
    app.get("/api/campers", CamperController.getAllCampers );
    app.post("/api/campers", CamperController.createCamper );
    app.get("/api/campers/:camp", CamperController.getCampersByCamp );
    app.get("/api/campers/:id", CamperController.getCamper );
    app.put("/api/campers/:id", CamperController.updateCamper );
    app.delete("/api/campers/:id", CamperController.deleteCamper );
};