
'use strict';

var TreeNode = require('../src/js/treeNode');

describe('Node', function() {
    var node,
        parentId = 0,
        state = 'closed',
        data = {
            title: 'My node'
        };

    beforeEach(function() {
        node = new TreeNode(data, parentId, state);
    });

    it('Methods about state', function() {
        expect(node.getState()).toEqual(state);

        node.setState('opened');
        expect(node.getState()).toEqual('opened');

        node.setState('asdf');
        expect(node.getState()).toEqual('opened');

        node.toggleState();
        expect(node.getState()).toEqual('closed');
    });

    it('Methods about id', function() {
        expect(node.getId()).toEqual(jasmine.any(Number));

        expect(node.getParentId()).toEqual(0);

        node.setParentId(-1);
        expect(node.getParentId()).toEqual(-1);

        node.addChildId(4);
        expect(node.getChildIds()).toContain(4);

        node.removeChildId(4);
        expect(node.getChildIds()).not.toContain(4);

        node.replaceChildIds([4, 5, 6]);
        expect(node.getChildIds()).toEqual([4, 5, 6]);
    });

    it('Methods about data', function() {
        expect(node.getData()).toEqual(jasmine.objectContaining({
            title: 'My node'
        }));

        node.addData({newData: 'data2'});
        expect(node.getData()).toEqual(jasmine.objectContaining({
            title: 'My node',
            newData: 'data2'
        }));

        node.removeData('title', 'newData');
        expect(node.getData().title).toBeUndefined();
        expect(node.getData().newData).toBeUndefined();
    });
});
