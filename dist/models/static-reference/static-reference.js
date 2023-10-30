"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticReference = void 0;
class StaticReference {
    static registerClass(Class, identifier) {
        if (StaticReference.classes[identifier]) {
            throw new Error(`Reference conflict between ${StaticReference.classes[identifier].Class.name} and ${Class.name}`);
        }
        // assert(typeof (Class as any).fromId === 'function');
        const pool = new Map();
        StaticReference.classes[identifier] = {
            Class,
            pool,
            fromId: Class.fromId,
        };
        return {
            pool,
            create: StaticReference.createReferenceFactory(identifier),
        };
    }
    static async parseValue(value) {
        if (typeof value !== 'object' || value === null) {
            return value;
        }
        if (typeof value.ref !== 'string') {
            return value;
        }
        const { ref } = value;
        const match = /([a-zA-Z]+)(\d+)/.exec(ref);
        if (!match) {
            throw new Error('malformed ref format');
        }
        const identifier = match[1];
        const id = parseInt(match[2], 10);
        const info = StaticReference.classes[identifier];
        if (!info?.pool) {
            throw new Error(`Cannot find static reference pool for id '${identifier}'`);
        }
        if (info.pool.has(id)) {
            return info.pool.get(id);
        }
        const item = await info.fromId(id);
        info.pool.set(id, item);
        return item;
    }
    static async parseAllValues(obj) {
        if (Array.isArray(obj)) {
            return Promise.all(obj.map((value) => StaticReference.parseAllValues(value)));
        }
        if (typeof obj === 'object' &&
            obj !== null &&
            obj.constructor === Object) {
            if (typeof obj.ref === 'string') {
                return StaticReference.parseValue(obj);
            }
            return Object.fromEntries(await Promise.all(Object.entries(obj).map(async ([key, val]) => [
                key,
                await StaticReference.parseAllValues(val),
            ])));
        }
        return obj;
    }
}
exports.StaticReference = StaticReference;
StaticReference.classes = {};
StaticReference.createReferenceFactory = (identifier) => (id) => ({
    ref: `${identifier}${id}`,
});
