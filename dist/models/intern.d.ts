import baseX from 'base-x';
export declare const base64: baseX.BaseConverter;
type JSONValue = string | number | boolean | null | JSONArray | JSONObject;
interface JSONArray extends Array<JSONValue> {
}
interface JSONObject {
    [key: string]: JSONValue;
}
export declare enum InternOption {
    KEYS = "keys",
    VALUES = "values"
}
export declare class InternJSON {
    static internStrings(data: JSONObject, option?: InternOption): {
        value: JSONObject;
        map: Record<string, string>;
    };
    static reverseInternStrings(data: JSONObject, stringMap: Record<string, string>, option?: InternOption): JSONObject;
}
export {};
