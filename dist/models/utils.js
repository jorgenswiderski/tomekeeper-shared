"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedUtils = void 0;
class SharedUtils {
    // Checks whether the given string is a valid V4 UUID
    static isUuid(str) {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regex.test(str);
    }
}
exports.SharedUtils = SharedUtils;
