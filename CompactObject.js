var compactObject = function(obj) {
    if (obj === null || obj === false || obj === 0 || obj === "") {
        return 0;
    }
    if (Array.isArray(obj)) {
        obj = obj.filter(function(value) {
            return value !== null && value !== false && value !== 0 && value !== "";
        }).map(compactObject);
        return obj;
    }
    if (typeof obj === "object" && obj !== null) {
        var result = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var compactedValue = compactObject(obj[key]);
                if (compactedValue !== 0) {
                    result[key] = compactedValue;
                }
            }
        }
        return result;
    }
    return obj;
};
 
console.log(compactObject({"a": null, "b": [false, 1]}));
