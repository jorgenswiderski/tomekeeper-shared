"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternJSON = exports.InternOption = exports.base64 = void 0;
const base_x_1 = __importDefault(require("base-x"));
const BASE64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-=';
exports.base64 = (0, base_x_1.default)(BASE64);
var InternOption;
(function (InternOption) {
    InternOption["KEYS"] = "keys";
    InternOption["VALUES"] = "values";
})(InternOption || (exports.InternOption = InternOption = {}));
class InternJSON {
    static internStrings(data, option = InternOption.VALUES) {
        const stringCounts = new Map();
        function countStrings(objectToCount) {
            if (Array.isArray(objectToCount)) {
                objectToCount.forEach(countStrings);
            }
            else if (typeof objectToCount === 'object' &&
                objectToCount !== null) {
                if (option === InternOption.KEYS) {
                    Object.keys(objectToCount).forEach((key) => {
                        if (typeof key === 'string') {
                            stringCounts.set(key, (stringCounts.get(key) || 0) + 1);
                        }
                    });
                }
                Object.values(objectToCount).forEach(countStrings);
            }
            else if (option === InternOption.VALUES &&
                typeof objectToCount === 'string') {
                stringCounts.set(objectToCount, (stringCounts.get(objectToCount) || 0) + 1);
            }
        }
        countStrings(data);
        const sortedStrings = Array.from(stringCounts.entries())
            .filter(([value, count]) => count * value.length > 7 + value.length + count)
            .sort((a, b) => (b[0].length - 1) * b[1] - (a[0].length - 1) * a[1])
            .map(([str]) => str);
        const stringMap = new Map();
        const usedIdentifiers = new Set(sortedStrings);
        let idCount = 0;
        function generateIdentifier() {
            let id = '';
            do {
                id = exports.base64.encode([idCount]);
                idCount += 1;
            } while (usedIdentifiers.has(id));
            usedIdentifiers.add(id);
            return id;
        }
        sortedStrings.forEach((str) => {
            const identifier = generateIdentifier();
            stringMap.set(str, identifier);
        });
        function internStringsInObj(obj) {
            if (Array.isArray(obj)) {
                return obj.map(internStringsInObj);
            }
            if (typeof obj === 'object' && obj !== null) {
                const newObj = {};
                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(obj)) {
                    const newKey = option === InternOption.KEYS && stringMap.has(key)
                        ? stringMap.get(key)
                        : key;
                    const newValue = internStringsInObj(value);
                    newObj[newKey] = newValue;
                }
                return newObj;
            }
            if (option === InternOption.VALUES &&
                typeof obj === 'string' &&
                stringMap.has(obj)) {
                return stringMap.get(obj);
            }
            return obj;
        }
        const internedObj = internStringsInObj(data);
        return { value: internedObj, map: Object.fromEntries(stringMap) };
    }
    static reverseInternStrings(data, stringMap, option = InternOption.VALUES) {
        const reverseMap = new Map(Object.entries(stringMap).map(([key, value]) => [value, key]));
        function reverseInternInObj(obj) {
            if (Array.isArray(obj)) {
                return obj.map(reverseInternInObj);
            }
            if (typeof obj === 'object' && obj !== null) {
                const newObj = {};
                // eslint-disable-next-line no-restricted-syntax
                for (const [key, value] of Object.entries(obj)) {
                    const newKey = option === InternOption.KEYS && reverseMap.has(key)
                        ? reverseMap.get(key)
                        : key;
                    const newValue = reverseInternInObj(value);
                    newObj[newKey] = newValue;
                }
                return newObj;
            }
            if (option === InternOption.VALUES &&
                typeof obj === 'string' &&
                reverseMap.has(obj)) {
                return reverseMap.get(obj);
            }
            return obj;
        }
        return reverseInternInObj(data);
    }
}
exports.InternJSON = InternJSON;
