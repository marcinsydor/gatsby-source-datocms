const buildNode = require('../utils/buildNode');
const { faviconTagsBuilder } = require('datocms-client');

module.exports = function buildFaviconMetaTagsNode(siteNode, entitiesRepo) {
  return buildNode('DatoCmsFaviconMetaTags', siteNode.id, node => {
    node.parent = siteNode.id;
    node.tags = faviconTagsBuilder(entitiesRepo);
  });
};
