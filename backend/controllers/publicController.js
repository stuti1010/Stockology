const {
  asyncErrorHandlerMiddleware,
} = require("../middlewares/asyncErrorHandlerMiddlware");
const Page = require("../models/Section");

exports.searchController = async (req, res) => {
    const { query } = req.query;
  
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }
  
    try {
      const results = await Page.find(
        { $text: { $search: query } },
        { score: { $meta: 'textScore' } }
      ).sort({ score: { $meta: 'textScore' } });
  
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: 'Error searching pages', error: error.message });
    }
  };

