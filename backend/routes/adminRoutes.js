const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/pages", adminController.getAllPages);
router.post("/pages",adminController.createPage);
router.put("/pages/:pageId",adminController.updatePage)
router.delete("/pages/:pageId",adminController.deletePage)


router.get("/pages/:pageId/sections",adminController.getPageById)
router.post("/pages/:pageId/sections",adminController.createSection)
router.delete("/pages/:pageId/sections/:sectionId",adminController.deleteSection)
router.put("/pages/:pageId/sections/:sectionId",adminController.updateSection)

router.get("/pages/:pageId/sections/:sectionId/subSections",adminController.getSectionById)
router.post("/pages/:pageId/sections/:sectionId/subSections",adminController.createSubSection)
router.delete("/pages/:pageId/sections/:sectionId/subSections/:subSectionId",adminController.deleteSubSection)
router.put("/pages/:pageId/sections/:sectionId/subSections/:subSectionId",adminController.updateSubSection)

module.exports = router;