module.exports = {
    // regex, replacement - replace
    // import, type - additional import (
    //    index - in _index.scss file
    //    colors - in _colors.scss file
    //    sizes - in _sizes.scss file)
    'typography': [
        { regex: /\(css\)\s/g, replacement: '' },
        { import: '../common', type: 'index' },
    ],
    'common': [
        { regex: /([^$][\w-].*?:\s.*),$/gm, replacement: '$1;' },
        { regex: /\.user-select\(none\),/, replacement: '@include user-select(none);' },
        { regex: /@mixin badge-settings\(\),/, replacement: '@include badge-settings();' },
        { regex: /@mixin validation-badge-animation\(\),/, replacement: '@include validation-badge-animation();' },
        { import: '../../base/mixins', type: 'index' },
        { import: '../../base/validation', type: 'index' },
        { import: '../list/sizes', type: 'index' },
    ],
    'icons': [
        { regex: /@import \(once\) "..\/base\/icons.scss";/, replacement: '' },
        { import: '../../base/icons', type: 'index' },
    ],
    'widget': [
        { import: '../common', type: 'index' },
    ],
    'fieldset': [
        { import: '../common/sizes', type: 'index' },
        { import: '../common', type: 'index' },
        { import: '../typography', type: 'index' },
    ],
    'button': [
        { import: '../../base/icons', type: 'index' },
        { regex: /@mixin dx-icon-sizing\(\$ICON_SIZE\),/, replacement: '@include dx-icon-sizing($ICON_SIZE);' },
        { regex: /\.dx-icon-margin\(\$ICON_MARGIN\),/, replacement: '@include dx-icon-margin($ICON_MARGIN);' },
        { regex: /@mixin dx-button-onlyicon-sizing\(\),/, replacement: '@include dx-button-onlyicon-sizing();' },
        { regex: /.dx-button-onlyicon-sizing\(\),/, replacement: '@include dx-button-onlyicon-sizing();' },
        { regex: /.dx-button-withtext-sizing\(\),/, replacement: '@include dx-button-withtext-sizing();' },
        { regex: /.dx-button-text-and-icon-sizing\(\),/, replacement: '@include dx-button-text-and-icon-sizing();' },
        { regex: /\$MATERIAL_BUTTON_MIN_WIDTH,/, replacement: '$MATERIAL_BUTTON_MIN_WIDTH;' }
    ],
    'buttonGroup': [
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'index' },
        { import: '../button/colors', type: 'colors' },
    ],
    'scrollView': [
        { import: '../scrollable/colors', type: 'index' },
    ],
    'checkBox': [
        { import: 'colors', type: 'sizes' },
        { import: '../../base/icons', type: 'index' },
    ],
    'switch': [
        { import: '../../base/mixins', type: 'index' },
    ],
    'tabs': [
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'index' },
        { import: '../button/colors', type: 'colors' },
        { import: '../../base/icons', type: 'index' },
    ],
    'navBar': [
        { import: '../../base/icons', type: 'index' },
    ],
    'validation': [
        { import: '../../base/validation', type: 'index' },
    ],
    'textEditor': [
        { import: '../../base/icons', type: 'index' },
        { import: '../common/sizes', type: 'index' },
        { import: '../button/sizes', type: 'index' },
        { import: '../common', type: 'index' },
        { import: '../button', type: 'index' },
        { regex: /@mixin texteditor-input-padding-filled\(\),/g, replacement: '@inclide texteditor-input-padding-filled();' },
        { regex: /@mixin texteditor-input-padding\(\),/g, replacement: '@inclide texteditor-input-padding();' },
        { regex: /.texteditor-validation-icon-offset-filled\(\),/g, replacement: '@include texteditor-validation-icon-offset-filled();' },
        { regex: /.texteditor-validation-icon-offset\(\),/g, replacement: '@include texteditor-validation-icon-offset();' },
        { regex: /@mixin dx-icon-sizing\(\$MATERIAL_TEXTEDITOR_ICON_CONTAINER_SIZE\),/, replacement: '@include dx-icon-sizing($MATERIAL_TEXTEDITOR_ICON_CONTAINER_SIZE);' },
        { regex: /@mixin dx-texteditor-icon\(\),/, replacement: '@include dx-texteditor-icon();' },
        { regex: /.dx-icon-font-centered-sizing\(\$MATERIAL_TEXTEDITOR_CLEAR_ICON_SIZE\),/, replacement: '@include dx-icon-font-centered-sizing($MATERIAL_TEXTEDITOR_CLEAR_ICON_SIZE);' },
        { regex: /\$texteditor-input-border-radius,/g, replacement: '$texteditor-input-border-radius;' },
        { regex: /relative,/g, replacement: 'relative;' }
    ],
    'textBox': [
        { import: '../../base/icons', type: 'index' },
        { import: '../textEditor', type: 'index' },
        { import: '../textEditor/colors', type: 'index' },
        { import: '../textEditor/sizes', type: 'index' },
    ],
    'dropDownEditor': [
        { import: '../common', type: 'index' },
        { import: '../common/sizes', type: 'index' },
        { import: '../textEditor/sizes', type: 'index' },
        { import: '../button/colors', type: 'colors' },
        { import: '../button/colors', type: 'index' },
        { import: '../textEditor/colors', type: 'colors' },
        { import: '../../base/icons', type: 'index' },
    ],
    'dropDownBox': [
        { import: '../dropDownEditor', type: 'index' },
    ],
    'list': [
        { import: '../../base/icons', type: 'index' },
        { import: '../button/colors', type: 'colors' },
        { import: '../button/colors', type: 'index' },
        { import: '../button/sizes', type: 'index' },
        { import: '../button', type: 'index' },
        { import: '../checkBox/colors', type: 'index' },
        { import: '../list/colors', type: 'sizes' },
        { regex: /@mixin item-states\(\),/, replacement: '@include item-states();' },
        { regex: /@mixin dx-icon\(chevronnext\),/, replacement: '@include dx-icon(chevronnext);' },
        { regex: /.dx-icon-sizing\(\$GENERIC_BASE_ICON_SIZE\),/g, replacement: '@include dx-icon-sizing($GENERIC_BASE_ICON_SIZE);' },
        { regex: /margin-left: -5px,/, replacement: 'margin-left: -5px;' },
        { regex: /color: \$list-item-chevron-icon-color,/, replacement: 'color: $list-item-chevron-icon-color;' },
        { regex: /width: \$GENERIC_BASE_ICON_SIZE \+ \$GENERIC_LIST_ITEM_HORIZONTAL_PADDING,/, replacement: 'width: $GENERIC_BASE_ICON_SIZE + $GENERIC_LIST_ITEM_HORIZONTAL_PADDING;' },
        { regex: /height: \$GENERIC_BASE_ICON_SIZE,/, replacement: 'height: $GENERIC_BASE_ICON_SIZE;' },
        { regex: /vertical-align: top,/, replacement: 'vertical-align: top;' },
        { regex: /margin-bottom: \$GENERIC_LIST_SEARCHBOX_MARGIN_BOTTOM,/, replacement: 'margin-bottom: $GENERIC_LIST_SEARCHBOX_MARGIN_BOTTOM;' }

    ],
    'numberBox': [
        { import: '../../base/icons', type: 'index' },
        { import: '../textEditor', type: 'index' },
        { import: '../textEditor/sizes', type: 'index' },
        { import: '../textEditor/colors', type: 'index' },
        { import: '../button/colors', type: 'colors' },
    ],
    'dateView': [
        { import: '../../base/mixins', type: 'index' },
    ],
    'timeView': [
        { import: '../textEditor/sizes', type: 'index' },
    ],
    'calendar': [
        { import: '../button/colors', type: 'colors' },
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'index' },
    ],
    'dateBox': [
        { import: '../../base/icons', type: 'index' },
        { import: '../dropDownEditor', type: 'index' },
        { import: '../textEditor', type: 'index' },
        { import: '../textEditor/colors', type: 'index' },
        { regex: /@mixin dx-icon\(spindown\),/, replacement: '@include dx-icon(spindown);' },
        { regex: /.dx-dropdowneditor-button-icon\(\),/, replacement: '@include dx-dropdowneditor-button-icon();' },
        { regex: /(hover-bg|opacity: 1|padding: 0|: none|_MARGIN|_MARGIN\/2|-1px),/g, replacement: '$1;' },
        { regex: /@mixin dx-icon\(event\),/, replacement: '@include dx-icon(event);' },
    ],
    'dropDownList': [
        { import: '../common', type: 'index' },
    ],
    'autocomplete': [
        { import: '../common', type: 'index' },
    ],
    'treeView': [
        { import: '../../base/treeView', type: 'index' },
        { import: '../../base/icons', type: 'index' },
        { import: '../checkBox/colors', type: 'index' },
    ],
    'overlay': [
        { import: '../common', type: 'index' },
    ],
    'menuBase': [
        { import: '../menu/colors', type: 'index' },
        { import: '../common', type: 'index' },
        { import: '../../base/icons', type: 'index' },
        { import: '../../base/mixins', type: 'index' },
    ],
    'menu': [
        { import: '../menuBase', type: 'index' },
        { import: '../menuBase/sizes', type: 'index' },
        { import: '../../base/icons', type: 'index' },
    ],
    'toolbar': [
        { import: '../../base/icons', type: 'index' },
        { import: '../list/sizes', type: 'index' },
        { import: '../button', type: 'index' },
        { regex: /@mixin dx-toolbar-item-padding\(\$MATERIAL_TOOLBAR_ITEM_SPACING\),/, replacement: '@include dx-toolbar-item-padding($MATERIAL_TOOLBAR_ITEM_SPACING);' },
        { regex: /.dx-toolbar-item-padding\(\$MATERIAL_MOBILE_TOOLBAR_ITEM_SPACING\),/, replacement: '@include dx-toolbar-item-padding($MATERIAL_MOBILE_TOOLBAR_ITEM_SPACING);' },
        { regex: /(-bg|-color|: 0|MATERIAL_LIST_ITEM_HEIGHT|MATERIAL_LIST_ITEM_HORIZONTAL_PADDING|4px|2 0|50%),/g, replacement: '$1;' },
        { regex: /@mixin dx-icon-sizing\(\$MATERIAL_BUTTON_ICON_SIZE\),/, replacement: '@include dx-icon-sizing($MATERIAL_BUTTON_ICON_SIZE);' },
        { regex: /\.dx-button-onlyicon-sizing\(\),/g, replacement: '@include dx-button-onlyicon-sizing();' },
        { regex: /\.dx-icon-margin\(6px\),/, replacement: '@include dx-icon-margin(6px);' },
    ],
    'popup': [
        { import: '../../base/icons', type: 'index' },
        { import: '../overlay/colors', type: 'index' },
        { import: '../toolbar', type: 'index' },
        { import: '../toolbar/sizes', type: 'index' },
        { import: '../button', type: 'index' },
    ],
    'dropDownButton': [
        { import: '../../base/icons', type: 'index' },
        { import: '../button', type: 'index' },
        { import: '../button/sizes', type: 'index' },
        { import: '../common', type: 'index' },
    ],
    'popover': [
        { import: '../overlay/colors', type: 'colors' },
        { import: '../overlay/colors', type: 'index' },
        { import: '../textEditor/colors', type: 'index' },
    ],
    'progressBar': [
        { import: '../../base/mixins', type: 'index' },
    ],
    'tooltip': [
        { import: '../overlay/colors', type: 'colors' },
    ],
    'gallery': [
        { import: '../../base/icons', type: 'index' },
    ],
    'lookup': [
        { import: '../../base/icons', type: 'index' },
        { import: '../textEditor/sizes', type: 'index' },
        { import: '../textEditor/colors', type: 'index' },
        { import: '../dropDownEditor', type: 'index' },
        { import: '../common', type: 'index' },
        { regex: /@mixin dx-icon\(spinnext\),/, replacement: '@include dx-icon(spinnext);' },
        { regex: /\.dx-icon-font-centered-sizing\(\$GENERIC_BASE_ICON_SIZE\),/, replacement: '@include dx-icon-font-centered-sizing($GENERIC_BASE_ICON_SIZE);' },
        { regex: /(GENERIC_BASE_INLINE_BORDEREDWIDGET_INNER_SIZE|lookup-icon-color|none|_CONTENT_PADDING|0|CONTENT_TOP|placeholder-color),/g, replacement: '$1;' },
    ],
    'loadPanel': [
        { import: '../overlay/colors', type: 'colors' },
    ],
    'tagBox': [
        { import: '../../base/icons', type: 'index' },
        { import: '../textEditor', type: 'index' },
        { import: '../common', type: 'index' },
        { regex: /@mixin dx-icon\(clear\),/, replacement: '@include dx-icon(clear);' },
        { regex: /(px|block|absolute|%|-remove-color|-active-color|-bg|none|0 0),/g, replacement: '$1;' },
    ],
    'accordion': [
        { import: '../../base/icons', type: 'index' },
    ],
    'slideOut': [
        { import: '../../base/icons', type: 'index' },
    ],
    'colorView': [
        { import: '../overlay/colors', type: 'colors' },
        { import: '../../base/colorView', type: 'index' },
    ],
    'colorBox': [
        { import: '../colorView/colors', type: 'index' },
    ],
    'gridBase': [
        { import: '../../base/icons', type: 'index' },
        { import: '../dropDownEditor', type: 'index' },
        { import: '../textEditor', type: 'index' },
        { import: '../common', type: 'index' },
        { import: '../popup/colors', type: 'index' },
        { import: '../menu/colors', type: 'index' },
        { import: '../toolbar/colors', type: 'index' },
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'index' },
        { import: '../validation/colors', type: 'index' },
        { regex: /@mixin dx-icon\(equal\),/, replacement: '@include dx-icon(equal);' },
        { regex: /@mixin dx-icon-sizing\(\$MATERIAL_GRID_BASE_HEADER_ICON_SIZE\),/, replacement: '@include dx-icon-sizing($MATERIAL_GRID_BASE_HEADER_ICON_SIZE);' },
        { regex: /\.dx-icon\((.*)\),/g, replacement: '@include dx-icon($1);' },
        { regex: /\.dx-icon-sizing\(\$MATERIAL_GRID_BASE_HEADER_ICON_SIZE\),/, replacement: '@include dx-icon-sizing($MATERIAL_GRID_BASE_HEADER_ICON_SIZE);' },
        { regex: /(px|LINE_HEIGHT|FONT_SIZE|inherit|relative|alternation-bg),/g, replacement: '$1;' },
        { regex: /2px; 18px; 0/, replacement: '2px, 18px, 0' },
        { regex: /when\s\((.*)\s=\s(.*)\)\s{([\w\W]*?)}/, replacement: '{\n    @if $1 == $2 {$3}\n    }' },
    ],
    'dataGrid': [
        { import: '../../base/icons', type: 'index' },
        { import: '../gridBase', type: 'index' },
        { import: '../gridBase/colors', type: 'index' },
        { import: '../gridBase/sizes', type: 'index' },
        { import: '../../base/dataGrid', type: 'index', alias: 'baseGrid', withVars: [
            'datagrid-border',
            'datagrid-border-color',
            'datagrid-drag-header-border-color',
            'datagrid-row-error-bg',
            'datagrid-row-error-color',
            'datagrid-base-color',
            'datagrid-base-background-color',
            'datagrid-focused-border-color',
            'HEADER_FILTER_COLOR',
            'HEADER_FILTER_COLOR_EMPTY',
            'base-focus-color',
            'datagrid-text-stub-background-image-path',
        ] },
        { regex: /@mixin grid-base\(datagrid\),/, replacement: '@include grid-base(datagrid);' },
        { regex: /(px|_SIZE|-zoom|separator-bg|columnchooser-item-color|menu-icon-color|-font-weight|PADDING 0|_HIDDEN|_MARGIN|_HEIGHT|_PADDING| border: \$datagrid-border|\+ 1),/g, replacement: '$1;' },
    ],
    'treeList': [
        { import: '../../base/mixins', type: 'index' },
        { import: '../../base/icons', type: 'index' },
        { import: '../gridBase', type: 'index' },
        { import: '../gridBase/colors', type: 'colors' },
        { import: '../gridBase/colors', type: 'index' },
        { import: '../gridBase/sizes', type: 'index' },
        { import: '../../base/treeList', type: 'index', alias: 'baseTreeList', withVars: [
            'datagrid-border',
            'datagrid-drag-header-border-color',
            'datagrid-row-error-bg',
            'datagrid-base-color',
            'datagrid-base-background-color',
            'datagrid-border-color',
            'datagrid-focused-border-color',
            'datagrid-text-stub-background-image-path',
            'datagrid-row-error-color',
            'HEADER_FILTER_COLOR',
            'HEADER_FILTER_COLOR_EMPTY',
            'base-focus-color',
        ] },
    ],
    'pivotGrid': [
        { import: '../common', type: 'index' },
        { import: '../../base/icons', type: 'index' },
        { import: '../gridBase/colors', type: 'index' },
        { import: '../treeView/sizes', type: 'index' },
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'index' },
        { import: '../../base/pivotGrid', alias: 'basePivotGrid', type: 'index', withVars: [
            'PIVOTGRID_DRAG_HEADER_BORDER_COLOR',
            'PIVOTGRID_DRAG_HEADER_FIRST_SHADOW_COLOR',
            'PIVOTGRID_DRAG_HEADER_SECOND_SHADOW_COLOR',
            'PIVOTGRID_BORDER_COLOR',
            'PIVOTGRID_COMMON_LEFT_RIGHT_PADDING',
            'PIVOTGRID_AREA_COLOR',
            'HEADER_FILTER_COLOR',
            'HEADER_FILTER_COLOR_EMPTY',
            'PIVOTGRID_AREA_BACKGROUND',
            'PIVOTGRID_COMMON_TOP_BOTTOM_PADDING',
            'PIVOTGRID_FIELD_INDICATORS_OFFSET',
            'PIVOTGRID_INDICATORS_LINE_HEIGHT',
            'PIVOTGRID_TOTALCOLOR',
            'PIVOTGRID_EXPAND_ICON_OFFSET', // TODO this variable is the same for generic, material (refactor with ios removing)
            'PIVOTGRID_EXPAND_ICON_TEXT_OFFSET', // TODO this variable is the same for generic, material (refactor with ios removing)
            'PIVOTGRID_FIELD_AREA_TEXT_COLOR',
            'PIVOTGRID_DATA_AREA_COLOR',
            'PIVOTGRID_GRANDTOTALCOLOR',
            'PIVOTGRID_ACCENT_COLOR',
            'PIVOTGRID_AREA_ALL_IMAGE',
            'PIVOTGRID_AREA_FILTER_IMAGE',
            'PIVOTGRID_AREA_ROW_IMAGE',
            'PIVOTGRID_AREA_COLUMN_IMAGE',
            'PIVOTGRID_AREA_DATA_IMAGE',
            'PIVOTGRID_DIMENSION_IMAGE',
            'PIVOTGRID_HIERARCHY_IMAGE',
        ] },
    ],
    'contextMenu': [
        { import: '../../base/icons', type: 'index' },
        { import: '../menuBase', type: 'index' },
        { import: '../menuBase/sizes', type: 'index' },
        { import: '../menu/colors', type: 'index' },
    ],
    'tabPanel': [
        { import: '../tabs', type: 'index' },
        { import: '../tabs/colors', type: 'index' },
    ],
    'fileUploader': [
        { import: '../../base/mixins', type: 'index' },
    ],
    'scheduler': [
        { import: '../../base/mixins', type: 'index' },
        { import: '../../base/icons', type: 'index' },
        { import: '../../base/scheduler', type: 'index', alias: 'baseScheduler', withVars: [
            'SCHEDULER_APPOINTMENT_BASE_COLOR',
            'SCHEDULER_APPOINTMENT_START_COLOR',
            'SCHEDULER_BASE_BORDER_COLOR',
            'SCHEDULER_ACCENT_BORDER_COLOR',
            'SCHEDULER_CURRENT_TIME_CELL_COLOR',
            'SCHEDULER_TIME_INDICATOR_COLOR',
            'SCHEDULER_TIME_INDICATOR_BACKGROUND_COLOR',
            'SCHEDULER_WORKSPACE_BACKGROUND_COLOR',
            'SCHEDULER_OTHER_MONTH_CELL_OPACITY',
            'SCHEDULER_WORKSPACE_MONTH_TEXT_COLOR',
            'SCHEDULER_WORKSPACE_ACCENT_COLOR',
            'SCHEDULER_FIRST_MONTH_CELL_BACKGROUND_COLOR',
            'SCHEDULER_PANEL_TEXT_COLOR',
            'SCHEDULER_LEFT_COLUMN_WIDTH',
            'SCHEDULER_WORKSPACE_ACTIVE_CELL_COLOR',
            'SCHEDULER_WORKSPACE_HOVERED_CELL_COLOR',
            'SCHEDULER_WORKSPACE_FOCUSED_CELL_COLOR',
            'SCHEDULER_DROPPABLE_CELL_BACKGROUND_COLOR',
            'SCHEDULER_APPOINTMENT_TEXT_COLOR',
            'SCHEDULER_FILL_FOCUSED_APPOINTMENT',
            'SCHEDULER_DD_APPOINTMENT_HOVER_TEXT_COLOR'
        ] },
        { import: '../button/colors', type: 'index' },
        { import: '../button', type: 'index' },
        { import: '../button/colors', type: 'sizes' },
        { import: '../tooltip/colors', type: 'index' },
        { regex: /@mixin dx-scheduler-all-day-title-mixin\(\$MATERIAL_SCHEDULER_HEADER_HEIGHT \+ \$MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT\),/, replacement: '@include dx-scheduler-all-day-title-mixin($MATERIAL_SCHEDULER_HEADER_HEIGHT + $MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT);' },
        { regex: /top: \$MATERIAL_SCHEDULER_HEADER_HEIGHT \+ \$MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT,/, replacement: 'top: $MATERIAL_SCHEDULER_HEADER_HEIGHT + $MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT;' },
        { regex: /@mixin dx-scheduler-header-scrollable-mixin\(\$MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT \* 2\),/, replacement: '@include dx-scheduler-header-scrollable-mixin($MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT * 2);' },
        { regex: /(px|none|border-color|SCHEDULER_TIME_PANEL_FONT_SIZE|\$SCHEDULER_BASE_BORDER|\$MATERIAL_SCHEDULER_HEADER_PANEL_TABLE_CELL_HEIGHT \* 2( \+ 1| \+ 1\)|\)|)?|alldaypanel-bg|SCHEDULER_GROUP_HEADER_FONT_SIZE|\$MATERIAL_SCHEDULER_GROUP_HEADER_TABLE_CELL_WIDTH - 1|_HEIGHT|_SIZE|bold| - 1|_TOP_GAP( \+ 1)?\)?),$/gm, replacement: '$1;' },
        { regex: /(@mixin |\.)dx-scheduler-header-scrollable-mixin\((.*?)\),/g, replacement: '@include dx-scheduler-header-scrollable-mixin($2);' },
        { regex: /\.dx-scheduler-agenda-group-mixin\(\$MATERIAL_SCHEDULER_GROUP_HEADER_TABLE_CELL_WIDTH\),/, replacement: '@include dx-scheduler-agenda-group-mixin($MATERIAL_SCHEDULER_GROUP_HEADER_TABLE_CELL_WIDTH);' },
        { regex: /@mixin dx-scheduler-all-day-title-mixin\(\$GENERIC_SCHEDULER_HEADER_HEIGHT \+ \$GENERIC_SCHEDULER_WORKSPACE_DATE_TABLE_CELL_HEIGHT\),/g, replacement: '@include dx-scheduler-all-day-title-mixin($GENERIC_SCHEDULER_HEADER_HEIGHT + $GENERIC_SCHEDULER_WORKSPACE_DATE_TABLE_CELL_HEIGHT);' },

        { regex: /@(include|mixin) scheduler-mixin\(\)[;,]/, replacement: '@include baseScheduler.scheduler-mixin();' },
        { regex: /@include dx-scheduler-all-day-title-mixin/g, replacement: '@include baseScheduler.dx-scheduler-all-day-title-mixin' },
        { regex: /@include dx-scheduler-vertical-group-table-mixin/g, replacement: '@include baseScheduler.dx-scheduler-vertical-group-table-mixin' },
        { regex: /@include dx-scheduler-scrollable-offset-mixin/g, replacement: '@include baseScheduler.dx-scheduler-scrollable-offset-mixin' },
        { regex: /@include dx-scheduler-group-mixin/g, replacement: '@include baseScheduler.dx-scheduler-group-mixin' },
        { regex: /(@include |@mixin |\.)dx-scheduler-header-scrollable-mixin/g, replacement: '@include baseScheduler.dx-scheduler-header-scrollable-mixin' },
        { regex: /@include dx-scheduler-agenda-group-mixin/g, replacement: '@include baseScheduler.dx-scheduler-agenda-group-mixin' },
        { regex: /\$SCHEDULER_BASE_BORDER([\s;])/g, replacement: 'baseScheduler.$SCHEDULER_BASE_BORDER$1' },
        { regex: /\$SCHEDULER_SMALL_SIZE_FACTOR([\s;])/g, replacement: 'baseScheduler.$SCHEDULER_SMALL_SIZE_FACTOR$1' },
    ]
};
