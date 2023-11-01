"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedUtils = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
class SharedUtils {
    // Checks whether the given string is a valid V4 UUID
    static isUuid(str) {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regex.test(str);
    }
    static getEncodedImageName(imageName) {
        return imageName.replace(/ /g, '_');
    }
    static getMediaWikiImagePath(imageName, includeFileName = true) {
        const formattedImageName = this.getEncodedImageName(imageName);
        const hash = crypto_js_1.default.MD5(formattedImageName).toString(crypto_js_1.default.enc.Hex);
        return `/media-wiki-assets/${hash[0]}/${hash[0]}${hash[1]}${includeFileName ? `/${imageName}` : ''}`;
    }
}
exports.SharedUtils = SharedUtils;
