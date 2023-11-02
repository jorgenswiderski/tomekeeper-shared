"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordCompressor = void 0;
class RecordCompressor {
    static registerClass(Class, identifier) {
        if (RecordCompressor.classes.has(identifier)) {
            const registeredClass = RecordCompressor.classes.get(identifier);
            // Sometimes the class may get registered again when the app hot reloads, so let's handle that gracefully.
            if (registeredClass.Class.name === Class.name) {
                return RecordCompressor.createReferenceFactory(identifier);
            }
            throw new Error(`Reference conflict between ${registeredClass.Class.name} and ${Class.name}`);
        }
        RecordCompressor.classes.set(identifier, {
            Class,
        });
        return RecordCompressor.createReferenceFactory(identifier);
    }
    static async parseValue(identifier, ...args) {
        const info = RecordCompressor.classes.get(identifier);
        if (!info) {
            throw new Error(`Compressor with identifier ${identifier} is not defined`);
        }
        if (info.Class.decompress) {
            return info.Class.decompress(...args);
        }
        return new info.Class(...args);
    }
    static async parseAllValues(obj) {
        if (Array.isArray(obj)) {
            if (obj[0] === '#' && typeof obj[1] === 'number') {
                return RecordCompressor.parseValue(obj[1], ...obj.slice(2));
            }
            return Promise.all(obj.map((value) => RecordCompressor.parseAllValues(value)));
        }
        if (typeof obj === 'object' &&
            obj !== null &&
            obj.constructor === Object) {
            return Object.fromEntries(await Promise.all(Object.entries(obj).map(async ([key, val]) => [
                key,
                await RecordCompressor.parseAllValues(val),
            ])));
        }
        return obj;
    }
}
exports.RecordCompressor = RecordCompressor;
RecordCompressor.classes = new Map();
RecordCompressor.createReferenceFactory = (identifier) => (...data) => [
    '#',
    identifier,
    ...data,
];
