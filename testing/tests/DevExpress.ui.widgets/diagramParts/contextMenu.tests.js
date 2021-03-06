import $ from 'jquery';
const { test } = QUnit;
import 'common.css!';
import 'ui/diagram';

import { DiagramCommand } from 'devexpress-diagram';
import { Consts, getContextMenuInstance, findContextMenuItem } from '../../../helpers/diagramHelpers.js';

const moduleConfig = {
    beforeEach: function() {
        this.onCustomCommandExecuted = sinon.spy();
        this.$element = $('#diagram').dxDiagram({
            onCustomCommandExecuted: this.onCustomCommandExecuted
        });
        this.instance = this.$element.dxDiagram('instance');
    }
};

QUnit.module('Context Menu', {
    beforeEach: function() {
        this.clock = sinon.useFakeTimers();
        moduleConfig.beforeEach.apply(this, arguments);
    },
    afterEach: function() {
        this.clock.restore();
        this.clock.reset();
    }
}, () => {
    test('should not render if contextMenu.enabled is false', function(assert) {
        let $contextMenu = this.$element.find(Consts.CONTEXT_MENU_SELECTOR);
        assert.equal($contextMenu.length, 1);
        this.instance.option('contextMenu.enabled', false);
        $contextMenu = this.$element.children(Consts.CONTEXT_MENU_SELECTOR);
        assert.equal($contextMenu.length, 0);
    });
    test('should load default items', function(assert) {
        const contextMenu = getContextMenuInstance(this.$element);
        assert.ok(contextMenu.option('items').length > 1);
    });
    test('should load custom items', function(assert) {
        this.instance.option('contextMenu.commands', ['copy']);
        const contextMenu = getContextMenuInstance(this.$element);
        assert.equal(contextMenu.option('items').length, 1);
    });
    test('should update items on showing', function(assert) {
        this.instance.option('contextMenu.commands', ['copy', 'selectAll']);
        const contextMenu = getContextMenuInstance(this.$element);
        assert.notOk(contextMenu.option('visible'));
        assert.equal(contextMenu.option('items')[0].visible, undefined);
        assert.equal(contextMenu.option('items')[1].visible, undefined);
        contextMenu.show();
        assert.ok(contextMenu.option('visible'));
        assert.equal(contextMenu.option('items')[0].visible, false);
        assert.equal(contextMenu.option('items')[1].visible, true);
    });
    test('should execute commands on click', function(assert) {
        this.instance.option('contextMenu.commands', ['selectAll']);
        this.instance._diagramInstance.commandManager.getCommand(DiagramCommand.Import).execute(Consts.SIMPLE_DIAGRAM);
        const contextMenu = getContextMenuInstance(this.$element);
        contextMenu.show();
        assert.ok(this.instance._diagramInstance.selection.isEmpty());
        findContextMenuItem(this.$element, 'select all').trigger('dxclick');
        assert.notOk(this.instance._diagramInstance.selection.isEmpty());
    });
    test('should execute custom commands on click', function(assert) {
        this.instance.option('contextMenu.commands', [
            {
                name: 'custom',
                text: 'custom'
            },
            {
                text: 'sub menu',
                items: [{
                    name: 'custom2',
                    text: 'custom2'
                }]
            }
        ]);
        const contextMenu = getContextMenuInstance(this.$element);
        contextMenu.show();
        findContextMenuItem(this.$element, 'custom').trigger('dxclick');
        findContextMenuItem(this.$element, 'sub menu').trigger('dxclick');
        findContextMenuItem(this.$element, 'custom2').trigger('dxclick');
        assert.ok(this.onCustomCommandExecuted.called);
        assert.equal(this.onCustomCommandExecuted.getCalls().length, 2);
        assert.equal(this.onCustomCommandExecuted.getCall(0).args[0]['name'], 'custom');
        assert.equal(this.onCustomCommandExecuted.getCall(1).args[0]['name'], 'custom2');
    });
});
