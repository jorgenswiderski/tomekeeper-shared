import { StaticReferenceHandle, StaticReferenceIdentifier, StaticallyReferenceable } from './types';
export declare class StaticReference {
    static classes: Record<string, {
        Class: new (...args: any[]) => any;
        pool: Map<number, any>;
        fromId: (id: number) => any;
    }>;
    static registerClass<T extends StaticallyReferenceable>(Class: new (...args: any[]) => T, identifier: StaticReferenceIdentifier): {
        pool: Map<number, any>;
        create: (id: number) => StaticReferenceHandle;
    };
    static parseValue(value: any): Promise<any>;
    static parseAllValues(obj: any): Promise<any>;
    static createReferenceFactory: (identifier: StaticReferenceIdentifier) => (id: number) => {
        ref: string;
    };
}
