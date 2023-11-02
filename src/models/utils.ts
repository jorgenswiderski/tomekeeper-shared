import CryptoJS from 'crypto-js';

export class SharedUtils {
    // Checks whether the given string is a valid V4 UUID
    static isUuid(str: string): boolean {
        const regex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        return regex.test(str);
    }

    private static getEncodedImageName(imageName: string): string {
        return imageName.replace(/ /g, '_');
    }

    static getMediaWikiImagePath(
        imageName: string,
        includeFileName: boolean = true,
    ): string {
        const formattedImageName = this.getEncodedImageName(imageName);

        const hash = CryptoJS.MD5(formattedImageName).toString(
            CryptoJS.enc.Hex,
        );

        // return `/media-wiki-assets/${hash[0]}/${hash[0]}${hash[1]}${
        //     includeFileName ? `/${imageName}` : ''
        // }`;

        return `/${hash[0]}/${hash[0]}${hash[1]}${
            includeFileName ? `/${imageName}` : ''
        }`;
    }
}
