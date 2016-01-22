tui.util.defineNamespace("fedoc.content", {});
fedoc.content["treeModel.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\r\n * @fileoverview Update view and control tree data\r\n * @author NHN Ent. FE dev team.&lt;dl_javascript@nhnent.com>\r\n */\r\n'use strict';\r\n\r\nvar TreeNode = require('./treeNode'),\r\n    util = require('./util');\r\n\r\nvar snippet = tui.util,\r\n    extend = snippet.extend,\r\n    keys = snippet.keys,\r\n    forEach = snippet.forEach,\r\n    map = snippet.map,\r\n    filter = snippet.filter,\r\n    inArray = snippet.inArray;\r\n\r\n/**\r\n * Tree model\r\n * @constructor TreeModel\r\n * @param {Array} data - Data\r\n * @param {Object} options - Options for defaultState and nodeIdPrefix\r\n **/\r\nvar TreeModel = tui.util.defineClass(/** @lends TreeModel.prototype */{ /* eslint-disable */\r\n    init: function(data, options) {/*eslint-enable*/\r\n        TreeNode.setIdPrefix(options.nodeIdPrefix);\r\n\r\n        /**\r\n         * Default state of node\r\n         * @type {String}\r\n         */\r\n        this.nodeDefaultState = options.nodeDefaultState;\r\n\r\n        /**\r\n         * Root node\r\n         * @type {TreeNode}\r\n         */\r\n        this.rootNode = new TreeNode({\r\n            state: 'opened'\r\n        }, null);\r\n\r\n        /**\r\n         * Tree hash having all nodes\r\n         * @type {object.&lt;string, TreeNode>}\r\n         */\r\n        this.treeHash = {};\r\n\r\n        this._setData(data);\r\n    },\r\n\r\n    /**\r\n     * Return prefix of node id\r\n     * @returns {string} Prefix\r\n     */\r\n    getNodeIdPrefix: function() {\r\n        return TreeNode.idPrefix;\r\n    },\r\n\r\n    /**\r\n     * Set model with tree data\r\n     * @param {Array} data - Tree data\r\n     */\r\n    _setData: function(data) {\r\n        var root = this.rootNode,\r\n            rootId = root.getId();\r\n\r\n        this.treeHash[rootId] = root;\r\n        this._makeTreeHash(data, root);\r\n    },\r\n\r\n    /**\r\n     * Make tree hash from data and parentNode\r\n     * @param {Array} data - Tree data\r\n     * @param {TreeNode} parent - Parent node id\r\n     * @private\r\n     */\r\n    _makeTreeHash: function(data, parent) {\r\n        var parentId = parent.getId();\r\n\r\n        forEach(data, function(datum) {\r\n            var childrenData = datum.children,\r\n                node = this._createNode(datum, parentId),\r\n                nodeId = node.getId();\r\n\r\n            this.treeHash[nodeId] = node;\r\n            parent.addChildId(nodeId);\r\n            this._makeTreeHash(childrenData, node);\r\n        }, this);\r\n    },\r\n\r\n    /**\r\n     * Create node\r\n     * @param {object} nodeData - Datum of node\r\n     * @param {string} parentId - Parent id\r\n     * @return {TreeNode} TreeNode\r\n     */\r\n    _createNode: function(nodeData, parentId) {\r\n        var node;\r\n        nodeData = extend({\r\n            state: this.nodeDefaultState\r\n        }, nodeData);\r\n\r\n        node = new TreeNode(nodeData, parentId);\r\n        node.removeData('children');\r\n\r\n        return node;\r\n    },\r\n\r\n    /**\r\n     * Get children\r\n     * @param {string} nodeId - Node id\r\n     * @return {Array.&lt;TreeNode>|undefined} children\r\n     */\r\n    getChildren: function(nodeId) {\r\n        var childIds = this.getChildIds(nodeId);\r\n        if (!childIds) {\r\n            return;\r\n        }\r\n\r\n        return map(childIds, function(childId) {\r\n            return this.getNode(childId);\r\n        }, this);\r\n    },\r\n\r\n    /**\r\n     * Get child ids\r\n     * @param {string} nodeId - Node id\r\n     * @returns {Array.&lt;string>|undefined} Child ids\r\n     */\r\n    getChildIds: function(nodeId) {\r\n        var node = this.getNode(nodeId);\r\n        if (!node) {\r\n            return;\r\n        }\r\n\r\n        return node.getChildIds();\r\n    },\r\n\r\n    /**\r\n     * Get the number of nodes\r\n     * @returns {number} The number of nodes\r\n     */\r\n    getCount: function() {\r\n        return keys(this.treeHash).length;\r\n    },\r\n\r\n    /**\r\n     * Get last depth\r\n     * @returns {number} The last depth\r\n     */\r\n    getLastDepth: function() {\r\n        var depths = map(this.treeHash, function(node) {\r\n            return this.getDepth(node.getId());\r\n        }, this);\r\n\r\n        return Math.max.apply(null, depths);\r\n    },\r\n\r\n    /**\r\n     * Find node\r\n     * @param {string} id - A node id to find\r\n     * @return {TreeNode|undefined} Node\r\n     */\r\n    getNode: function(id) {\r\n        return this.treeHash[id];\r\n    },\r\n\r\n    /**\r\n     * Get depth from node id\r\n     * @param {string} id - A node id to find\r\n     * @return {number|undefined} Depth\r\n     */\r\n    getDepth: function(id) {\r\n        var node = this.getNode(id),\r\n            depth = 0,\r\n            parent;\r\n\r\n        if (!node) {\r\n            return;\r\n        }\r\n\r\n        parent = this.getNode(node.getParentId());\r\n        while (parent) {\r\n            depth += 1;\r\n            parent = this.getNode(parent.getParentId());\r\n        }\r\n\r\n        return depth;\r\n    },\r\n\r\n    /**\r\n     * Return parent id of node\r\n     * @param {string} id - Node id\r\n     * @returns {string|undefined} Parent id\r\n     */\r\n    getParentId: function(id) {\r\n        var node = this.getNode(id);\r\n\r\n        if (!node) {\r\n            return;\r\n        }\r\n        return node.getParentId();\r\n    },\r\n\r\n    /**\r\n     * Remove a node with children.\r\n     * - The update event will be fired with parent node.\r\n     * @param {string} id - Node id to remove\r\n     * @param {boolean} [isSilent] - If true, it doesn't trigger the 'update' event\r\n     */\r\n    remove: function(id, isSilent) {\r\n        var node = this.getNode(id),\r\n            parent;\r\n\r\n        if (!node) {\r\n            return;\r\n        }\r\n\r\n        parent = this.getNode(node.getParentId());\r\n\r\n        forEach(node.getChildIds(), function(childId) {\r\n            this.remove(childId, true);\r\n        }, this);\r\n\r\n        parent.removeChildId(id);\r\n        delete this.treeHash[id];\r\n\r\n        if (!isSilent) {\r\n            this.fire('update', parent.getId());\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Add node(s).\r\n     * - If the parentId is falsy, the node will be appended to rootNode.\r\n     * - The update event will be fired with parent node.\r\n     * @param {Array|object} data - Raw-data\r\n     * @param {string} parentId - Parent id\r\n     * @param {boolean} [isSilent] - If true, it doesn't trigger the 'update' event\r\n     */\r\n    add: function(data, parentId, isSilent) {\r\n        var parent = this.getNode(parentId) || this.rootNode;\r\n\r\n        data = [].concat(data);\r\n        this._makeTreeHash(data, parent);\r\n\r\n        if (!isSilent) {\r\n            this.fire('update', parentId);\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Set data properties of a node\r\n     * @param {string} id - Node id\r\n     * @param {object} props - Properties\r\n     * @param {boolean} [isSilent] - If true, it doesn't trigger the 'update' event\r\n     */\r\n    setNodeData: function(id, props, isSilent) {\r\n        var node = this.getNode(id);\r\n\r\n        if (!node || !props) {\r\n            return;\r\n        }\r\n\r\n        node.setData(props);\r\n\r\n        if (!isSilent) {\r\n            this.fire('update', node.getParentId());\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Remove node data\r\n     * @param {string} id - Node id\r\n     * @param {string|Array} names - Names of properties\r\n     * @param {boolean} [isSilent] - If true, it doesn't trigger the 'update' event\r\n     */\r\n    removeNodeData: function(id, names, isSilent) {\r\n        var node = this.getNode(id);\r\n\r\n        if (!node || !names) {\r\n            return;\r\n        }\r\n\r\n        if (tui.util.isArray(names)) {\r\n            node.removeData.apply(node, names);\r\n        } else {\r\n            node.removeData(names);\r\n        }\r\n\r\n        if (!isSilent) {\r\n            this.fire('update', node.getParentId());\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Move a node to new parent's child\r\n     * @param {string} nodeId - Node id\r\n     * @param {string} newParentId - New parent id\r\n     * @param {boolean} [isSilent] - If true, it doesn't trigger the 'update' event\r\n     */\r\n    move: function(nodeId, newParentId, isSilent) {\r\n        var node = this.getNode(nodeId),\r\n            originalParent, originalParentId, newParent;\r\n\r\n        if (!node) {\r\n            return;\r\n        }\r\n        newParent = this.getNode(newParentId) || this.rootNode;\r\n        newParentId = newParent.getId();\r\n        originalParentId = node.getParentId();\r\n        originalParent = this.getNode(originalParentId);\r\n\r\n        if (nodeId === newParentId || this.contains(nodeId, newParentId)) {\r\n            return;\r\n        }\r\n        originalParent.removeChildId(nodeId);\r\n        node.setParentId(newParentId);\r\n        newParent.addChildId(nodeId);\r\n\r\n        if (!isSilent) {\r\n            this.fire('move', nodeId, originalParentId, newParentId);\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Check to see if a node is a descendant of another node.\r\n     * @param {string} containerId - Node id\r\n     * @param {string} containedId - Node id\r\n     * @returns {boolean} The node is contained or not\r\n     */\r\n    contains: function(containerId, containedId) {\r\n        var parentId = this.getParentId(containedId),\r\n            isContained = false;\r\n\r\n        while (!isContained &amp;&amp; parentId) {\r\n            isContained = (containerId === parentId);\r\n            parentId = this.getParentId(parentId);\r\n        }\r\n        return isContained;\r\n    },\r\n\r\n    /**\r\n     * Sort nodes\r\n     * @param {Function} comparator - Comparator function\r\n     */\r\n    sort: function(comparator) {\r\n        this.eachAll(function(node, nodeId) {\r\n            var children = this.getChildren(nodeId),\r\n                childIds;\r\n\r\n            if (children.length > 1) {\r\n                children.sort(comparator);\r\n\r\n                childIds = map(children, function(child) {\r\n                    return child.getId();\r\n                });\r\n                node.replaceChildIds(childIds);\r\n            }\r\n        });\r\n    },\r\n\r\n    /**\r\n     * Get node data (all)\r\n     * @param {string} nodeId - Node id\r\n     * @return {object|undefined} Node data\r\n     */\r\n    getNodeData: function(nodeId) {\r\n        var node = this.getNode(nodeId);\r\n        if (!node) {\r\n            return;\r\n        }\r\n\r\n        return node.getAllData();\r\n    },\r\n\r\n    /**\r\n     * Traverse this tree iterating over all nodes.\r\n     * @param {Function} iteratee - Iteratee function\r\n     * @param {object} [context] - Context of iteratee\r\n     */\r\n    eachAll: function(iteratee, context) {\r\n        context = context || this;\r\n\r\n        forEach(this.treeHash, function() {\r\n            iteratee.apply(context, arguments);\r\n        });\r\n    },\r\n\r\n    /**\r\n     * Traverse this tree iterating over all descendants of a node.\r\n     * @param {Function} iteratee - Iteratee function\r\n     * @param {string} parentId - Parent node id\r\n     * @param {object} [context] - Context of iteratee\r\n     */\r\n    each: function(iteratee, parentId, context) {\r\n        var stack, nodeId, node;\r\n\r\n        node = this.getNode(parentId);\r\n        if (!node) {\r\n            return;\r\n        }\r\n        stack = node.getChildIds();\r\n\r\n        context = context || this;\r\n        while (stack.length) {\r\n            nodeId = stack.pop();\r\n            node = this.getNode(nodeId);\r\n            iteratee.call(context, node, nodeId);\r\n\r\n            stack = stack.concat(node.getChildIds());\r\n        }\r\n    }\r\n});\r\n\r\ntui.util.CustomEvents.mixin(TreeModel);\r\nmodule.exports = TreeModel;\r\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"