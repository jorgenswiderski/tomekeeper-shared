import { InternOption } from './types';
type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
interface JsonArray extends Array<JsonValue> {
}
interface JsonObject {
    [key: string]: JsonValue;
}
interface InternedJsonObject {
    o: JsonObject;
    v: Record<string, string>;
    k: Record<string, string>;
}
export declare class InternJson {
    protected static internStrings(data: JsonObject, option?: InternOption): {
        value: JsonObject;
        map: Record<string, string>;
    };
    protected static reverseInternStrings(data: JsonObject, stringMap: Record<string, string>, option?: InternOption): JsonObject;
    static intern(data: JsonObject): InternedJsonObject;
    static reverseIntern(data: InternedJsonObject): JsonObject;
}
export {};
