import '../jquery_augmentation';

import {
    dxElement
} from '../core/element';

import FileSystemItem from '../file_management/file_system_item';

import {
    dxContextMenuItem
} from './context_menu';

import {
    dxDataGridColumn
} from './data_grid';

import {
    dxToolbarItem
} from './toolbar';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

export interface dxFileManagerOptions extends WidgetOptions<dxFileManager> {
    /**
     * @docid dxFileManagerOptions.allowedFileExtensions
     * @type Array<string>
     * @default [".txt", ".rtf", ".doc", ".docx", ".odt", ".xls", ".xlsx", ".ods", ".ppt", ".pptx", ".odp", ".pdf", ".xml", ".png", ".svg", ".gif", ".jpg", ".jpeg", ".ico", ".bmp", ".avi", ".mpeg", ".mkv", ""]
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowedFileExtensions?: Array<string>;
    /**
     * @docid dxFileManagerOptions.contextMenu
     * @type dxFileManagerContextMenu
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    contextMenu?: dxFileManagerContextMenu;
    /**
     * @docid dxFileManagerOptions.currentPath
     * @type string
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    currentPath?: string;
    /**
     * @docid dxFileManagerOptions.currentPathKeys
     * @type Array<string>
     * @default []
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    currentPathKeys?: Array<string>;
    /**
     * @docid dxFileManagerOptions.customizeDetailColumns
     * @type function
     * @type_function_param1 columns:Array<dxDataGridColumn>
     * @type_function_return Array<dxDataGridColumn>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    customizeDetailColumns?: ((columns: Array<dxDataGridColumn>) => Array<dxDataGridColumn>);
    /**
     * @docid dxFileManagerOptions.customizeThumbnail
     * @type function
     * @type_function_param1 fileSystemItem:FileSystemItem
     * @type_function_return string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    customizeThumbnail?: ((fileSystemItem: FileSystemItem) => string);
    /**
     * @docid dxFileManagerOptions.fileSystemProvider
     * @type object
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fileSystemProvider?: any;
    /**
     * @docid dxFileManagerOptions.itemView
     * @type object
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    itemView?: { mode?: 'details' | 'thumbnails', showFolders?: boolean, showParentFolder?: boolean };
    /**
     * @docid dxFileManagerOptions.onCurrentDirectoryChanged
     * @extends Action
     * @type function(e)
     * @type_function_param1 e:object
     * @type_function_param1_field4 directory:FileSystemItem
     * @default null
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCurrentDirectoryChanged?: ((e: { component?: dxFileManager, element?: dxElement, model?: any, directory?: FileSystemItem }) => any);
    /**
     * @docid dxFileManagerOptions.onSelectedFileOpened
     * @extends Action
     * @type function(e)
     * @type_function_param1 e:object
     * @type_function_param1_field4 file:FileSystemItem
     * @default null
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectedFileOpened?: ((e: { component?: dxFileManager, element?: dxElement, model?: any, file?: FileSystemItem }) => any);
    /**
     * @docid dxFileManagerOptions.onSelectionChanged
     * @extends Action
     * @type function(e)
     * @type_function_param1 e:object
     * @type_function_param1_field4 currentSelectedItemKeys:Array<string>
     * @type_function_param1_field5 currentDeselectedItemKeys:Array<string>
     * @type_function_param1_field6 selectedItems:Array<FileSystemItem>
     * @type_function_param1_field7 selectedItemKeys:Array<string>
     * @default null
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onSelectionChanged?: ((e: { component?: dxFileManager, element?: dxElement, model?: any, currentSelectedItemKeys?: Array<string>, currentDeselectedItemKeys?: Array<string>, selectedItems?: Array<FileSystemItem>, selectedItemKeys?: Array<string>}) => any);
    /**
     * @docid dxFileManagerOptions.permissions
     * @type object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    permissions?: { copy?: boolean, create?: boolean, download?: boolean, move?: boolean, remove?: boolean, rename?: boolean, upload?: boolean };
    /**
     * @docid dxFileManagerOptions.rootFolderName
     * @type string
     * @default "Files"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rootFolderName?: string;
    /**
     * @docid dxFileManagerOptions.selectionMode
     * @type Enums.FileManagerSelectionMode
     * @default "multiple"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * @docid dxFileManagerOptions.toolbar
     * @type dxFileManagerToolbar
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toolbar?: dxFileManagerToolbar;
    /**
     * @docid dxFileManagerOptions.upload
     * @type object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    upload?: { maxFileSize?: number, chunkSize?: number };
}
/**
 * @docid dxFileManager
 * @inherits Widget
 * @module ui/file_manager
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxFileManager extends Widget {
    constructor(element: Element, options?: dxFileManagerOptions)
    constructor(element: JQuery, options?: dxFileManagerOptions)
    /**
     * @docid dxFileManagerMethods.getCurrentDirectory
     * @publicName getCurrentDirectory()
     * @return object
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getCurrentDirectory(): any;
    /**
     * @docid dxFileManagerMethods.getSelectedItems
     * @publicName getSelectedItems()
     * @return Array<object>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getSelectedItems(): Array<any>;
    /**
     * @docid dxFileManagerMethods.refresh
     * @publicName refresh()
     * @return Promise<any>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    refresh(): Promise<any> & JQueryPromise<any>;
}

export interface dxFileManagerContextMenu {
    /**
     * @docid dxFileManagerContextMenu.items
     * @type Array<dxFileManagerContextMenuItem,Enums.FileManagerContextMenuItem>
     * @default [ "create", "upload", "rename", "move", "copy", "delete", "refresh", "download" ]
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxFileManagerContextMenuItem | 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'>;
}

export interface dxFileManagerContextMenuItem extends dxContextMenuItem {
    /**
     * @docid dxFileManagerContextMenuItem.items
     * @type Array<dxFileManagerContextMenuItem>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxFileManagerContextMenuItem>;
    /**
     * @docid dxFileManagerContextMenuItem.name
     * @type Enums.FileManagerContextMenuItem|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    name?: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | string;
    /**
     * @docid dxFileManagerContextMenuItem.visible
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}

export interface dxFileManagerToolbar {
    /**
     * @docid dxFileManagerToolbar.fileSelectionItems
     * @type Array<dxFileManagerToolbarItem,Enums.FileManagerToolbarItem>
     * @default [ "download", "separator", "move", "copy", "rename", "separator", "delete", "clear", { name: "separator", location: "after" }, "refresh" ]
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fileSelectionItems?: Array<dxFileManagerToolbarItem | 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clear' | 'separator'>;
    /**
     * @docid dxFileManagerToolbar.items
     * @type Array<dxFileManagerToolbarItem,Enums.FileManagerToolbarItem>
     * @default [ "showNavPane", "create", "upload", "switchView", { name: "separator", location: "after" }, "refresh" ]
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<dxFileManagerToolbarItem | 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clear' | 'separator'>;
}

export interface dxFileManagerToolbarItem extends dxToolbarItem {
    /**
     * @docid dxFileManagerToolbarItem.location
     * @default "before"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    location?: 'after' | 'before' | 'center';
    /**
     * @docid dxFileManagerToolbarItem.name
     * @type Enums.FileManagerToolbarItem|string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    name?: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clear' | 'separator' | string;
    /**
     * @docid dxFileManagerToolbarItem.visible
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}

declare global {
interface JQuery {
    dxFileManager(): JQuery;
    dxFileManager(options: "instance"): dxFileManager;
    dxFileManager(options: string): any;
    dxFileManager(options: string, ...params: any[]): any;
    dxFileManager(options: dxFileManagerOptions): JQuery;
}
}
export type Options = dxFileManagerOptions;

/** @deprecated use Options instead */
export type IOptions = dxFileManagerOptions;