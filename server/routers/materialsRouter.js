const express = require('express');
const materialController = require("../controller/MaterialsController");
const router = express.Router();


router.post("/material/upload", materialController.uploadMaterial);
router.get("/materials/:code", materialController.getMaterials);
router.delete("/materials/:class_code/:material_code", materialController.deleteMaterial);

module.exports = router;