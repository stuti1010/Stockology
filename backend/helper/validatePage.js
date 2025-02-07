exports.validatePage = (page) => {
    if (!page || typeof page !== "object") {
        return "Page field is required and must be an object.";
    }
    if (!page.pageName || typeof page.pageName !== "string" || page.pageName.trim() === "") {
        return "pageName is required and must be a non-empty string.";
    }
    if (!Array.isArray(page.sections) || page.sections.length === 0) {
        return "At least one section is required.";
    }
    for (const section of page.sections) {
        if (!section.sectionName || typeof section.sectionName !== "string" || section.sectionName.trim() === "") {
            return `Section must have a valid sectionName.`;
        }
        if (!Array.isArray(section.subSections) || section.subSections.length === 0) {
            return `Section '${section.sectionName}' must have at least one subSection.`;
        }
        for (const subSection of section.subSections) {
            if (!subSection.subSectionName || typeof subSection.subSectionName !== "string" || subSection.subSectionName.trim() === "") {
                return "Each subSection must have a valid subSectionName.";
            }
            if (!subSection.type || !["text", "image"].includes(subSection.type)) {
                return `Invalid type for subSection '${subSection.subSectionName}'. Must be 'text' or 'image'.`;
            }
            if (subSection.content === undefined || subSection.content === null) {
                return `SubSection '${subSection.subSectionName}' must have content.`;
            }
        }
    }
    return null; 
};

