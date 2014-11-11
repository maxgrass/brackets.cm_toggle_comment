define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Commands = brackets.getModule("command/Commands"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus"),
        bracketsStrings = brackets.getModule("strings"),
        //
        // CUSTOM COMMAND
        cm_toggle_comment = "cm_comment.commentHandler";

    function onToggleComment() {
        var editor = EditorManager.getCurrentFullEditor();
        CommandManager.execute(Commands.EDIT_LINE_COMMENT, editor);
    }

    CommandManager.register(
        bracketsStrings.CMD_COMMENT,
        cm_toggle_comment,
        onToggleComment
    );
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(cm_toggle_comment);
});