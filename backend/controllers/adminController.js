const Page = require('../models/Section'); 
const {
    asyncErrorHandlerMiddleware,
  } = require("../middlewares/asyncErrorHandlerMiddlware");
const {validatePage}=require("../helper/validatePage")
const {validateSection}=require("../helper/validateSection");
const { validateSubSection } = require('../helper/validateSubSection');
//   PagesControllers

exports.getAllPages=asyncErrorHandlerMiddleware(async(req,res)=>{
       const AllPages=await Page.find({})
       if(AllPages.length===0){
       return res.status(200).json({message:"No Pages Found",data:AllPages})
       }
      
       res.status(200).json({message:"Pages retrieved successfully",data:AllPages})

})



exports.createPage = asyncErrorHandlerMiddleware(async (req, res) => {
    const { page } = req.body;
    const validationError = validatePage(page);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
   
    const existingPage = await Page.findOne({ "page.pageName": page.pageName });
    if (existingPage) {
        return res.status(400).json({ message: `Page with name '${page.pageName}' already exists.` });
    }

    const newPage = new Page(page);
    await newPage.save();
    res.status(201).json({ message: "Page created successfully", page: newPage });
});




exports.getPageById = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId } = req.params;

    // Find the page by ID
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    res.status(200).json({ message: "Page retrieved successfully", data: page });
});








exports.updatePage = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId } = req.params;
    const { page } = req.body;

    // Validate the incoming page data
    const validationError = validatePage(page);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    // Check if the page exists
    const existingPage = await Page.findById(pageId);
    if (!existingPage) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Check if the new pageName already exists (if it's being updated)
    if (page.pageName && page.pageName !== existingPage.pageName) {
        const pageWithSameName = await Page.findOne({ pageName: page.pageName });
        if (pageWithSameName) {
            return res.status(400).json({ message: `Page with name '${page.pageName}' already exists.` });
        }
    }

    // Update the page
    Object.assign(existingPage, page);
    await existingPage.save();

    res.status(200).json({ message: "Page updated successfully", data: existingPage });
});


exports.deletePage = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId } = req.params;

    // Check if the page exists
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Delete the page
    await Page.deleteOne({ _id: pageId });

    res.status(200).json({ message: "Page deleted successfully" });
});



// section controllers




exports.createSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const {  section } = req.body;
    const {pageId}=req.params

    
    const validationError=validateSection(pageId,section)
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

   
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    
    const sectionExists = page.sections.some((sec) => sec.sectionName === section.sectionName);
    if (sectionExists) {
        return res.status(400).json({ message: `Section with name '${section.sectionName}' already exists.` });
    }

    page.sections.push(section);
    await page.save();

    res.status(201).json({ message: "Section added successfully", section });
});




exports.getSectionById = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId } = req.params;

    // Find the page by ID
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Find the section by ID within the page
    const section = page.sections.id(sectionId);
    if (!section) {
        return res.status(404).json({ message: "Section not found." });
    }

    res.status(200).json({ message: "Section retrieved successfully", data: section });
});

exports.updateSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId } = req.params;
    const { section } = req.body;

    // Validate the incoming section data
    const validationError = validateSection(pageId, section);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    // Check if the page exists
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Check if the section exists
    const sectionToUpdate = page.sections.id(sectionId);
    if (!sectionToUpdate) {
        return res.status(404).json({ message: "Section not found." });
    }

    // Check if the new sectionName already exists (if it's being updated)
    if (section.sectionName && section.sectionName !== sectionToUpdate.sectionName) {
        const sectionExists = page.sections.some((sec) => sec.sectionName === section.sectionName);
        if (sectionExists) {
            return res.status(400).json({ message: `Section with name '${section.sectionName}' already exists.` });
        }
    }

    // Update the section
    Object.assign(sectionToUpdate, section);
    await page.save();

    res.status(200).json({ message: "Section updated successfully", data: sectionToUpdate });
});

exports.deleteSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId } = req.params;

    // Check if the page exists
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Check if the section exists
    const sectionToDelete = page.sections.id(sectionId);
    if (!sectionToDelete) {
        return res.status(404).json({ message: "Section not found." });
    }

    // Remove the section
    page.sections.pull(sectionId);
    await page.save();

    res.status(200).json({ message: "Section deleted successfully" });
});





// subsection controllers

exports.createSubSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const {  subSection } = req.body;
    const {pageId, sectionId}=req.params

   
   const validationError=validateSubSection(pageId,sectionId,subSection)
   if (validationError) {
    return res.status(400).json({ message: validationError });
}


   
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    const section = page.sections.id(sectionId);
    if (!section) {
        return res.status(404).json({ message: "Section not found." });
    }

     
     const subSectionExists = section.subSections.some((subSec) => subSec.subSectionName === subSection.subSectionName);
     if (subSectionExists) {
         return res.status(400).json({ message: `SubSection with name '${subSection.subSectionName}' already exists.` });
     }

   
    section.subSections.push(subSection);
    await page.save();

    res.status(201).json({ message: "SubSection added successfully", subSection });
});





exports.getSubSectionById = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId, subSectionId } = req.params;

    // Find the page by ID
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Find the section by ID within the page
    const section = page.sections.id(sectionId);
    if (!section) {
        return res.status(404).json({ message: "Section not found." });
    }

    // Find the subsection by ID within the section
    const subSection = section.subSections.id(subSectionId);
    if (!subSection) {
        return res.status(404).json({ message: "SubSection not found." });
    }

    res.status(200).json({ message: "SubSection retrieved successfully", data: subSection });
});

exports.updateSubSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId, subSectionId } = req.params;
    const { subSection } = req.body;

    // Validate the incoming subsection data
    const validationError = validateSubSection(pageId, sectionId, subSection);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    // Check if the page exists
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Check if the section exists
    const section = page.sections.id(sectionId);
    if (!section) {
        return res.status(404).json({ message: "Section not found." });
    }

    // Check if the subsection exists
    const subSectionToUpdate = section.subSections.id(subSectionId);
    if (!subSectionToUpdate) {
        return res.status(404).json({ message: "SubSection not found." });
    }

    // Check if the new subSectionName already exists (if it's being updated)
    if (subSection.subSectionName && subSection.subSectionName !== subSectionToUpdate.subSectionName) {
        const subSectionExists = section.subSections.some(
            (subSec) => subSec.subSectionName === subSection.subSectionName
        );
        if (subSectionExists) {
            return res.status(400).json({ message: `SubSection with name '${subSection.subSectionName}' already exists.` });
        }
    }

    // Update the subsection
    Object.assign(subSectionToUpdate, subSection);
    await page.save();

    res.status(200).json({ message: "SubSection updated successfully", data: subSectionToUpdate });
});

exports.deleteSubSection = asyncErrorHandlerMiddleware(async (req, res) => {
    const { pageId, sectionId, subSectionId } = req.params;

    // Check if the page exists
    const page = await Page.findById(pageId);
    if (!page) {
        return res.status(404).json({ message: "Page not found." });
    }

    // Check if the section exists
    const section = page.sections.id(sectionId);
    if (!section) {
        return res.status(404).json({ message: "Section not found." });
    }

    // Check if the subsection exists
    const subSectionToDelete = section.subSections.id(subSectionId);
    if (!subSectionToDelete) {
        return res.status(404).json({ message: "SubSection not found." });
    }

    // Remove the subsection
    section.subSections.pull(subSectionId);
    await page.save();

    res.status(200).json({ message: "SubSection deleted successfully" });
});

