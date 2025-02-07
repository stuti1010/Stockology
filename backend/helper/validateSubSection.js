exports.validateSubSection=(pageId,sectionId,subSection)=>{
    if (!pageId || typeof pageId !== "string") {
        return res.status(400).json({ message: "Valid pageId is required." });
    }
    if (!sectionId || typeof sectionId !== "string") {
        return res.status(400).json({ message: "Valid sectionId is required." });
    }

   
    if (!subSection || typeof subSection !== "object") {
        return res.status(400).json({ message: "SubSection field is required and must be an object." });
    }

    
    if (!subSection.subSectionName || typeof subSection.subSectionName !== "string" || subSection.subSectionName.trim() === "") {
        return res.status(400).json({ message: "subSectionName is required and must be a non-empty string." });
    }

    
    if (!subSection.type || !["text", "image"].includes(subSection.type)) {
        return res.status(400).json({ message: `Invalid type for subSection '${subSection.subSectionName}'. Must be 'text' or 'image'.` });
    }

   
    if (subSection.content === undefined || subSection.content === null) {
        return res.status(400).json({ message: `SubSection '${subSection.subSectionName}' must have content.` });
    }
}