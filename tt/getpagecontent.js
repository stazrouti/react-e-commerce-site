// getContent.js
const fs = require('fs').promises;

const getPageContent = async (pageId) => {
  try {
    const filePath = `pages/${pageId}.js`;
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading content for page ${pageId}: ${error.message}`);
    return null;
  }
};

module.exports = getPageContent;
