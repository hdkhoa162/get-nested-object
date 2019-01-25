'use strict';

const getNestedObject = (jsonObj, selectors) => {
    if (!Array.isArray(selectors)) {
        selectors = selectors.split('.');        
    }

    return selectors.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, jsonObj);
}


module.exports = getNestedObject;
