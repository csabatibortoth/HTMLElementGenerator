//Author: Csaba Tóth https://github.com/csabatibortoth/
//LICENCE: MIT
//Repository: https://github.com/csabatibortoth/HTMLElementGenerator
//Version: 0.0.1

function HTMLElementGenerator(options){
    if (options !== undefined) {
        switch (options.elementType) {
            case "div":
                generateDiv(options);
                break;
            case "span":
                generateSpan(options);
                break;
            case "p":
                generateParagraph(options);
                break;
            case "h1":
                generateH1(options);
                break;
            case "h2":
                generateH2(options);
                break;
            case "h3":
                generateH3(options);
                break;
            case "h4":
                generateH4(options);
                break;
            case "h5":
                generateH5(options);
                break;
            case "h6":
                generateH6(options);
                break;
            
            default:
                generateError(wrongInputTypeError({
                    vname: "options",
                    line: 3,
                    fname: "HTMLControlGenerator"
                }, options));
                break;
        }
    } else {
        generateError(undefinedError({
            vname: "options",
            line: "2",
            fname: "HTMLControlGenerator"
        }));
    }
}

/*-----------------HTML ELEMENT GENERATION-----------------------*/

function addBasicAttributes(element,options) {
    element.attr('id',options.id);
    element.addClass(options.class);
    if(options.text != undefined) element.text(options.text);
    return element;
}

function generateDiv(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<div>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 41,
            fname: "generateDiv"
        }));
    }
}

function generateSpan(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<span>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 56,
            fname: "generateSpan"
        }));
    }
}

function generateParagraph(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<p>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 74,
            fname: "generateParagraph"
        }));
    }
}

function generateH1(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h1>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 92,
            fname: "generateH1"
        }));
    }
}

function generateH2(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h2>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 107,
            fname: "generateH2"
        }));
    }
}

function generateH3(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h3>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 122,
            fname: "generateH3"
        }));
    }
}

function generateH4(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h4>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 137,
            fname: "generateH4"
        }));
    }
}

function generateH5(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h5>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 152,
            fname: "generateH5"
        }));
    }
}

function generateH6(options){
    var parent = $('#' + options.parent);
    if (options.parent !== undefined) {
        var element = $('<h6>');
        element = addBasicAttributes(element,options);
        appendHTMLWithElement(parent, element)
    } else {
        generateError(undefinedError({
            vname: "options.parent",
            line: 167,
            fname: "generateH6"
        }));
    }
}

function appendHTMLWithElement(parent, element) {
    if (parent.length !== 0) {
        parent.append(element);
    } else {
        var div = $('<div>');
        div.append(element);
        if ($('body').length !== 0) {
            $('body').append(div);
        } else {
            generateError(noBodyOrParentError({
                vname: "parent",
                line: 496,
                fname: "appendHTMLWithElement"
            }));
        }
    }
}

/*-----------------ERROR HANDLING-----------------------*/
function undefinedError(options) {
    var undefinedError = {
        errorCode: 0,
        errorString: "undefined",
        errorVariable: options.vname,
        errorLine: options.line,
        errorFunction: options.fname
    };
    return undefinedError;
}

function wrongInputTypeError(options, inputOptions) {
    var wrongInputTypeError = {
        errorCode: 1,
        errorString: "Wrong Input Type defined",
        errorVariable: options.vname,
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: inputOptions
    }
    return wrongInputTypeError;
}

function noBodyOrParentError(options) {
    var noBodyOrParentError = {
        errorCode: 2,
        errorString: "No body or parent to append input!",
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: options.errorMiscInfo
    };
}

function unsupportedBrowser(options) {
    var unsupportedBrowser = {
        errorCode: 999,
        errorString: "Unsupported browser",
        errorLine: options.line,
        errorFunction: options.fname,
        errorMiscInfo: options.errorMiscInfo
    }
    return unsupportedBrowser;
}

function generateError(error) {
    console.log(error);
    var div = $('<div>');
    var errorText = "Error Code: " + error.errorCode + ", Error description: " + error.errorString + "! For more information see console!";
    div.text(errorText);
    if ($('body').length) {
        $('body').append(div);
    } else console.log(error);
}

function getBrowserName() {
    var navAgent = navigator.userAgent;
    var browserName;
    if ((versionOffset = navAgent.indexOf("Opera")) != -1) {
        browserName = "Opera";
    } else if ((versionOffset = navAgent.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
    } else if ((versionOffset = navAgent.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
    } else if ((versionOffset = navAgent.indexOf("Safari")) != -1) {
        browserName = "Safari";
    } else if ((versionOffset = navAgent.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
    } else if ((nameOffset = navAgent.lastIndexOf(' ') + 1) < (versionOffset = navAgent.lastIndexOf('/'))) {
        browserName = navAgent.substring(nameOffset, versionOffset);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    return browserName;
}