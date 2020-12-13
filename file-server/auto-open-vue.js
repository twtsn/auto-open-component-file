const openFile = function (event, dom, exePath) {
    event.stopPropagation();
    let filePath = dom.getAttribute('data-file');
    if (!filePath) {
        return;
    }
    let data = {
        exePath, filePath
    }
    fetch('http://localhost:3000', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}
const updateTemplate = function (resourcePath, template, exePath) {
    if (!template || !template.content) {
        return '';
    }
    return `<template><div onclick="openFileInEXE(event, this, '${exePath}')" style="display: inline-block" data-file="${resourcePath}">
${template.content}</div></template>`
}
const updateScript = function (resourcePath, script, tmeplate) {
    if (!script || !script.content) {
        return '';
    }
    let templateStr = tmeplate ? tmeplate.content : '';
    if (templateStr.indexOf('router-link') > -1) {
        return `<script>${script.content}</script>`;
    }
    let event = `\n window.openFileInEXE = ${openFile.toString()} \n`;
    return `<script>${event}${script.content}</script>`;
}
const updateStyles = function (styles) {
    return styles.map((item) => {
        return `<style :scoped="${!!item.scoped}">${item.content}</style>`
    }).join('\n');
}
module.exports = function loader (source) {
    const compile = require('vue-template-compiler');
    const sourceMap = compile.parseComponent(source);
    const filePath = encodeURIComponent(this.resourcePath), exePath = encodeURIComponent(this.query.exePath);
    let templateStr = updateTemplate(filePath, sourceMap.template, exePath);
    let scriptStr = updateScript(filePath, sourceMap.script, sourceMap.template);
    let styleStr = updateStyles(sourceMap.styles);
    let result = templateStr + scriptStr + styleStr;
    return result;
};