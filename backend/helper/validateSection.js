exports.validateSection=(pageId,section)=>{
    if (!pageId || typeof pageId !== "string") {
        return "Valid pageId is required." ;
    }

   
    if (!section || typeof section !== "object") {
        return "Section field is required and must be an object." ;
    }

    
    if (!section.sectionName || typeof section.sectionName !== "string" || section.sectionName.trim() === "") {
       return "sectionName is required and must be a non-empty string." ;
    }

    
    if (!Array.isArray(section.subSections)) {
        return "subSections must be an array." ;
    }

    for (const subSection of section.subSections) {
        if (!subSection.subSectionName || typeof subSection.subSectionName !== "string" || subSection.subSectionName.trim() === "") {
            return "Each subSection must have a valid subSectionName." ;
        }

        if (!subSection.type || !["text", "image"].includes(subSection.type)) {
            return  `Invalid type for subSection '${subSection.subSectionName}'. Must be 'text' or 'image'.`;
        }

        if (subSection.content === undefined || subSection.content === null) {
            return `SubSection '${subSection.subSectionName}' must have content.`;
        }
    }

    return null
}