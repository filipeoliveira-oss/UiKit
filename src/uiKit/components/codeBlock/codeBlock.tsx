import React, { useEffect, useState } from 'react'
import { BundledTheme, codeToHtml, StringLiteralUnion, ThemeRegistrationAny } from 'shiki'

interface CodeBlockProps {
    code: string
    filename?: string
    language?: string,
    copy?: boolean,
    theme?:ThemeRegistrationAny | StringLiteralUnion<BundledTheme, string>
}

const expoTheme = {
    "$schema": "vscode://schemas/color-theme",
    "tokenColors": [
        {
            "name": "comment.line",
            "scope": "comment.line",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "comment.block",
            "scope": "comment.block",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "constant.numeric",
            "scope": "constant.numeric",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "constant.language",
            "scope": "constant.language",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "constant.other.variable",
            "scope": "constant.other.variable",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "editorBracketMatch.border",
            "scope": "editorBracketMatch.border",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "entity.name.tag",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "entity.name.type",
            "scope": "entity.name.type",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "entity.name.type.class",
            "scope": "entity.name.type.class",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "entity.name.type.module",
            "scope": "entity.name.type.module",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "entity.other",
            "scope": "entity.other",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "entity.other.attribute-name",
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "entity.scope.name",
            "scope": "entity.scope.name",
            "settings": {
                "foreground": "#0090ff"
            }
        },
        {
            "name": "keyword.control",
            "scope": "keyword.control",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "keyword.control.flow",
            "scope": "keyword.control.flow",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "keyword.control.new",
            "scope": "keyword.control.new",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "keyword.other",
            "scope": "keyword.other",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "keyword.operator",
            "scope": "keyword.operator",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "keyword.operator.assignment",
            "scope": "keyword.operator.assignment",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "keyword.operator.expression",
            "scope": "keyword.operator.expression",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "keyword.operator.logical",
            "scope": "keyword.operator.logical",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "keyword.operator.rest",
            "scope": "keyword.operator.rest",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "keyword.operator.spread",
            "scope": "keyword.operator.spread",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "keyword.operator.type.annotation",
            "scope": "keyword.operator.type.annotation",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "keyword.operator.ternary",
            "scope": "keyword.operator.ternary",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "keyword.operator.new",
            "scope": "keyword.operator.new",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "meta.brace",
            "scope": "meta.brace",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "meta.definition.variable",
            "scope": "meta.definition.variable",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "meta.definition.function",
            "scope": "meta.definition.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "meta.definition.method",
            "scope": "meta.definition.method",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "meta.definition.property",
            "scope": "meta.definition.property",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "meta.function-call",
            "scope": "meta.function-call",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "meta.import",
            "scope": "meta.import",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "meta.object-literal.key",
            "scope": "meta.object-literal.key",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "punctuation.accessor",
            "scope": "punctuation.accessor",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.bracket",
            "scope": "punctuation.bracket",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.definition",
            "scope": "punctuation.definition",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.definition.annotation",
            "scope": "punctuation.definition.annotation",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "punctuation.definition.block",
            "scope": "punctuation.definition.block",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.definition.parameters",
            "scope": "punctuation.definition.parameters",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.definition.string",
            "scope": "punctuation.definition.string",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.section",
            "scope": "punctuation.section",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.separator",
            "scope": "punctuation.separator",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.separator.dot-access",
            "scope": "punctuation.separator.dot-access",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "punctuation.terminator.statement",
            "scope": "punctuation.terminator.statement",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "storage.modifier",
            "scope": "storage.modifier",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "storage.modifier.import",
            "scope": "storage.modifier.import",
            "settings": {
                "foreground": "#b0b4ba"
            }
        },
        {
            "name": "storage.type",
            "scope": "storage.type",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "storage.type.annotation",
            "scope": "storage.type.annotation",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "storage.type.generic",
            "scope": "storage.type.generic",
            "settings": {
                "foreground": "#0090ff"
            }
        },
        {
            "name": "storage.type.function.arrow",
            "scope": "storage.type.function.arrow",
            "settings": {
                "foreground": "#696e77"
            }
        },
        {
            "name": "string.quoted",
            "scope": "string.quoted",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "string.template",
            "scope": "string.template",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "support.type.primitive",
            "scope": "support.type.primitive",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "support.type.property-name",
            "scope": "support.type.property-name",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "support.type.builtin",
            "scope": "support.type.builtin",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "variable.object.property",
            "scope": "variable.object.property",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "variable.other",
            "scope": "variable.other",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "variable.other.constant",
            "scope": "variable.other.constant",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "variable.other.macro.argument",
            "scope": "variable.other.macro.argument",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "variable.parameter.probably",
            "scope": "variable.parameter.probably",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "variable.language",
            "scope": "variable.language",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.java entity.name.function",
            "scope": "source.java entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.java keyword.control.new",
            "scope": "source.java keyword.control.new",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.java storage.modifier",
            "scope": "source.java storage.modifier",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.java storage.modifier.extends",
            "scope": "source.java storage.modifier.extends",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.java storage.modifier.implements",
            "scope": "source.java storage.modifier.implements",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.java storage.type",
            "scope": "source.java storage.type",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.java storage.type.primitive",
            "scope": "source.java storage.type.primitive",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.java storage.type.generic",
            "scope": "source.java storage.type.generic",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.java punctuation.terminator",
            "scope": "source.java punctuation.terminator",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.kotlin keyword.control.new",
            "scope": "source.kotlin keyword.control.new",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.kotlin storage.modifier",
            "scope": "source.kotlin storage.modifier",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.kotlin variable.parameter.function",
            "scope": "source.kotlin variable.parameter.function",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "source.kotlin entity.other.inherited-class",
            "scope": "source.kotlin entity.other.inherited-class",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "source.kotlin punctuation.seperator",
            "scope": "source.kotlin punctuation.seperator",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "text.html.markdown fenced_code.block.language",
            "scope": "text.html.markdown fenced_code.block.language",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "text.html.markdown markup.bold",
            "scope": "text.html.markdown markup.bold",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "text.html.markdown markup.italic",
            "scope": "text.html.markdown markup.italic",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "text.html.markdown markup.strikethrough",
            "scope": "text.html.markdown markup.strikethrough",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "text.html.markdown markup.inline.raw.string",
            "scope": "text.html.markdown markup.inline.raw.string",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "text.html.markdown markup.underline.link",
            "scope": "text.html.markdown markup.underline.link",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "text.html.markdown meta.paragraph",
            "scope": "text.html.markdown meta.paragraph",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "text.html.markdown punctuation.definition.heading",
            "scope": "text.html.markdown punctuation.definition.heading",
            "settings": {
                "foreground": "#0090ff"
            }
        },
        {
            "name": "text.html.markdown string.other.link.title",
            "scope": "text.html.markdown string.other.link.title",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "text.html.markdown meta.separator",
            "scope": "text.html.markdown meta.separator",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx meta.paragraph",
            "scope": "source.mdx meta.paragraph",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "source.mdx punctuation.definition.heading",
            "scope": "source.mdx punctuation.definition.heading",
            "settings": {
                "foreground": "#0090ff"
            }
        },
        {
            "name": "source.mdx string.other.begin.code.fenced",
            "scope": "source.mdx string.other.begin.code.fenced",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx string.other.end.code.fenced",
            "scope": "source.mdx string.other.end.code.fenced",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx variable.ordered.list",
            "scope": "source.mdx variable.ordered.list",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx variable.unordered.list",
            "scope": "source.mdx variable.unordered.list",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx markup.code",
            "scope": "source.mdx markup.code",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "source.mdx string.other.number",
            "scope": "source.mdx string.other.number",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx meta.separator",
            "scope": "source.mdx meta.separator",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.mdx support.class.component",
            "scope": "source.mdx support.class.component",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.objc entity.name.function",
            "scope": "source.objc entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.objc entity.name.function.preprocessor",
            "scope": "source.objc entity.name.function.preprocessor",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.objc keyword.other.property.attribute",
            "scope": "source.objc keyword.other.property.attribute",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.objc meta.bracketed",
            "scope": "source.objc meta.bracketed",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.objc meta.function-call",
            "scope": "source.objc meta.function-call",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "source.objc storage.type",
            "scope": "source.objc storage.type",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.objc support.class.cocoa",
            "scope": "source.objc support.class.cocoa",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.objc support.other.protocol",
            "scope": "source.objc support.other.protocol",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.ruby constant.other.symbol.hashkey",
            "scope": "source.ruby constant.other.symbol.hashkey",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.ruby entity.name.function",
            "scope": "source.ruby entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.ruby support.class",
            "scope": "source.ruby support.class",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.ruby variable.parameter.function",
            "scope": "source.ruby variable.parameter.function",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.shell entity.name.command",
            "scope": "source.shell entity.name.command",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.shell support.function.builtin",
            "scope": "source.shell support.function.builtin",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.swift entity.name.type",
            "scope": "source.swift entity.name.type",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.swift support.function.any-method",
            "scope": "source.swift support.function.any-method",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.swift keyword.control.new",
            "scope": "source.swift keyword.control.new",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.swift meta.parameter-clause",
            "scope": "source.swift meta.parameter-clause",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.swift meta.function-call",
            "scope": "source.swift meta.function-call",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "source.swift entity.name.function",
            "scope": "source.swift entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.swift meta.definition.function.body",
            "scope": "source.swift meta.definition.function.body",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "source.swift meta.definition.type.body",
            "scope": "source.swift meta.definition.type.body",
            "settings": {
                "foreground": "#edeef0"
            }
        },
        {
            "name": "source.swift meta.inheritance-clause",
            "scope": "source.swift meta.inheritance-clause",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.swift punctuation.definition.attribute",
            "scope": "source.swift punctuation.definition.attribute",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.swift storage.modifier",
            "scope": "source.swift storage.modifier",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.swift support.type",
            "scope": "source.swift support.type",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.swift support.function",
            "scope": "source.swift support.function",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "source.swift variable.parameter.function",
            "scope": "source.swift variable.parameter.function",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "source.swift meta.function-result",
            "scope": "source.swift meta.function-result",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.swift variable.language.generic-parameter",
            "scope": "source.swift variable.language.generic-parameter",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.ts punctuation.definition.block.tag.jsdoc",
            "scope": "source.ts punctuation.definition.block.tag.jsdoc",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.ts storage.type.class.jsdoc",
            "scope": "source.ts storage.type.class.jsdoc",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.tsx punctuation.definition.block.tag.jsdoc",
            "scope": "source.tsx punctuation.definition.block.tag.jsdoc",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.tsx storage.type.class.jsdoc",
            "scope": "source.tsx storage.type.class.jsdoc",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "text.xml entity.other.attribute-name.localname",
            "scope": "text.xml entity.other.attribute-name.localname",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.gdscript constant.language",
            "scope": "source.gdscript constant.language",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.gdscript entity.name.function",
            "scope": "source.gdscript entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.gdscript entity.name.type.class",
            "scope": "source.gdscript entity.name.type.class",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.gdscript entity.other.inherited-class",
            "scope": "source.gdscript entity.other.inherited-class",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.gdscript keyword.language",
            "scope": "source.gdscript keyword.language",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.gdscript keyword.control",
            "scope": "source.gdscript keyword.control",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.gdscript support.function",
            "scope": "source.gdscript support.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.gdscript variable.parameter.function",
            "scope": "source.gdscript variable.parameter.function",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.dart entity.name.function",
            "scope": "source.dart entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.dart keyword.declaration",
            "scope": "source.dart keyword.declaration",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.dart punctuation",
            "scope": "source.dart punctuation",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.dart other.source",
            "scope": "source.dart other.source",
            "settings": {
                "foreground": "#777b84"
            }
        },
        {
            "name": "source.dart string.interpolated",
            "scope": "source.dart string.interpolated",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "source.dart string.quoted",
            "scope": "source.dart string.quoted",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "source.dart string.template",
            "scope": "source.dart string.template",
            "settings": {
                "foreground": "#ffca16"
            }
        },
        {
            "name": "source.dart support.class",
            "scope": "source.dart support.class",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.dart variable.parameter",
            "scope": "source.dart variable.parameter",
            "settings": {
                "foreground": "#e5484d"
            }
        },
        {
            "name": "source.cs keyword.type",
            "scope": "source.cs keyword.type",
            "settings": {
                "foreground": "#f76b15"
            }
        },
        {
            "name": "source.cs keyword.type.void",
            "scope": "source.cs keyword.type.void",
            "settings": {
                "foreground": "#de51a8"
            }
        },
        {
            "name": "source.cs entity.name.function",
            "scope": "source.cs entity.name.function",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "name": "source.cs variable.other.object.property",
            "scope": "source.cs variable.other.object.property",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "source.diff meta.diff.header",
            "scope": "source.diff meta.diff.header",
            "settings": {
                "foreground": "#3b9eff"
            }
        },
        {
            "settings": {
                "background": "#201314",
                "foreground": "#ec5d5e"
            },
            "name": "source.diff meta.diff.header.from-file",
            "scope": "source.diff meta.diff.header.from-file"
        },
        {
            "name": "source.diff meta.diff.header.from-file punctuation.definition",
            "scope": "source.diff meta.diff.header.from-file punctuation.definition",
            "settings": {
                "foreground": "#8c333a"
            }
        },
        {
            "settings": {
                "background": "#121b17",
                "foreground": "#3dd68c"
            },
            "name": "source.diff meta.diff.header.to-file",
            "scope": "source.diff meta.diff.header.to-file"
        },
        {
            "name": "source.diff meta.diff.header.to-file punctuation.definition",
            "scope": "source.diff meta.diff.header.to-file punctuation.definition",
            "settings": {
                "foreground": "#28684a"
            }
        },
        {
            "name": "source.diff meta.diff.range",
            "scope": "source.diff meta.diff.range",
            "settings": {
                "foreground": "#9a5cd0"
            }
        },
        {
            "name": "source.diff markup.inserted.diff",
            "scope": "source.diff markup.inserted.diff",
            "settings": {
                "foreground": "#3dd68c"
            }
        },
        {
            "name": "source.diff markup.deleted.diff",
            "scope": "source.diff markup.deleted.diff",
            "settings": {
                "foreground": "#ec5d5e"
            }
        },
        {
            "name": "source.diff punctuation.definition.inserted.diff",
            "scope": "source.diff punctuation.definition.inserted.diff",
            "settings": {
                "foreground": "#28684a"
            }
        },
        {
            "name": "source.diff punctuation.definition.deleted.diff",
            "scope": "source.diff punctuation.definition.deleted.diff",
            "settings": {
                "foreground": "#8c333a"
            }
        },
        {
            "name": "source.diff punctuation.definition.range.diff",
            "scope": "source.diff punctuation.definition.range.diff",
            "settings": {
                "foreground": "#8457aa"
            }
        }
    ],
    "colors": {
        "activityBar.background": "#0C0D0E",
        "activityBar.border": "#111113",
        "activityBar.foreground": "#b0b4ba",
        "activityBar.activeBackground": "#18191b",
        "activityBarBadge.background": "#0090ff",
        "badge.background": "#004074",
        "breadcrumb.background": "#18191b",
        "button.background": "#2870bd",
        "dropdown.background": "#111113",
        "editor.background": "#111113",
        "editor.border": "#111113",
        "editor.selectionBackground": "#2e3135",
        "editor.selectionHighlightBackground": "#2e3135",
        "editor.wordHighlightBackground": "#2e3135",
        "editorBracketHighlight.foreground1": "#696e77",
        "editorBracketHighlight.foreground2": "#696e77",
        "editorBracketHighlight.foreground3": "#696e77",
        "editorBracketHighlight.foreground4": "#696e77",
        "editorBracketHighlight.foreground5": "#696e77",
        "editorBracketHighlight.foreground6": "#696e77",
        "editorBracketHighlight.unexpectedBracket.foreground": "#696e77",
        "editorCodeLens.foreground": "#b0b4ba",
        "editorGroup.border": "#363a3f",
        "editorGroupHeader.tabsBackground": "#0C0D0E",
        "editorGutter.foldingControlForeground": "#777b84",
        "editorLineNumber.foreground": "#696e77",
        "editorWidget.background": "#111113",
        "focusBorder": "#00000000",
        "list.activeSelectionBackground": "#212225",
        "list.activeSelectionBorder": "#00000000",
        "list.focusOutline": "#00000000",
        "list.focusBackground": "#2e3135",
        "list.hoverBackground": "#272a2d",
        "list.inactiveSelectionBackground": "#18191b",
        "menu.background": "#111113",
        "menu.separatorBackground": "#212225",
        "menu.border": "#212225",
        "input.background": "#18191b",
        "inputOption.activeBackground": "#0d2847",
        "inputOption.activeForeground": "#70b8ff",
        "panel.background": "#0C0D0E",
        "panel.border": "#212225",
        "panelTitle.activeBorder": "#70b8ff",
        "peekView.border": "#43484e",
        "peekViewEditor.background": "#18191b",
        "peekViewResult.background": "#111113",
        "peekViewResult.selectionBackground": "#2e3135",
        "peekViewResult.lineForeground": "#777b84",
        "peekViewResult.matchHighlightBackground": "#003362",
        "peekViewTitleDescription.foreground": "#777b84",
        "pickerGroup.foreground": "#777b84",
        "pickerGroup.border": "#363a3f",
        "sash.hoverBorder": "#363a3f",
        "scrollbar.shadow": "#0C0D0E",
        "scrollbarSlider.background": "#212225",
        "scrollbarSlider.hoverBackground": "#272a2d",
        "scrollbarSlider.activeBackground": "#2e3135",
        "settings.checkboxBackground": "#0C0D0E",
        "settings.checkboxBorder": "#363a3f",
        "settings.dropdownBackground": "#0C0D0E",
        "settings.dropdownBorder": "#363a3f",
        "settings.modifiedItemIndicator": "#2870bd",
        "settings.numberInputBackground": "#0C0D0E",
        "settings.numberInputBorder": "#363a3f",
        "settings.sashBorder": "#363a3f",
        "settings.textInputBackground": "#0C0D0E",
        "settings.textInputBorder": "#363a3f",
        "sideBar.background": "#0C0D0E",
        "sideBar.border": "#212225",
        "sideBarSectionHeader.background": "#0C0D0E",
        "sideBarSectionHeader.border": "#111113",
        "sideBarTitle.foreground": "#777b84",
        "statusBar.background": "#0C0D0E",
        "statusBar.border": "#212225",
        "statusBar.debuggingBackground": "#a35829",
        "statusBar.noFolderBackground": "#8457aa",
        "statusBarItem.remoteBackground": "#2870bd",
        "tab.border": "#111113",
        "tab.activeBackground": "#18191b",
        "tab.inactiveBackground": "#0C0D0E",
        "titleBar.activeBackground": "#0C0D0E",
        "titleBar.inactiveBackground": "#0C0D0E",
        "titleBar.border": "#111113",
        "tree.indentGuidesStroke": "#363a3f"
    }
}

export default function CodeBlock({ code, filename, language = 'tsx', copy = true, theme }: CodeBlockProps) {
    const [currentCode, setCurrentCode] = useState('')


    useEffect(() => {
        if (code) {
            highlightCode(code, language)
        }
    }, [code])


    async function highlightCode(code: string, lang: string) {
        const response = await codeToHtml(code, {
            lang,
            theme: theme ?? expoTheme
        })

        setCurrentCode(response)
    }

    function handleCopy() {
        const text = document.createElement('div')
        text.innerHTML = code
        navigator.clipboard.writeText(text.innerText)
    }

    return (
        <div className='w-full h-fit relative'>
            {filename && (
                <div className="text-xs px-4 py-1 bg-gray-800 text-white rounded-t-md font-mono">
                    {filename}
                </div>
            )}

            <div
                className="overflow-auto text-sm font-mono shrink-0"
                dangerouslySetInnerHTML={{ __html: currentCode }}
            />

            {copy && (
                <button className='w-fit h-fit absolute top-0 right-4 text-white cursor-pointer active:scale-90' onClick={() => handleCopy()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    </svg>
                </button>
            )}
        </div>
    )
}