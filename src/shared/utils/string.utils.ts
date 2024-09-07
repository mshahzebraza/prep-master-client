import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


/**
 * This function returns a relative path by removing the layout path from the start of the provided path.
 * @param {string} path - The original path from which to generate the relative path. It should start with the layout path.
 * @param {string} layoutPath - The layout path to remove from the start of the path.
 * @returns - The relative path obtained by removing the layout path from the original path.
 * @throws {Error} - Throws an error if the layout path is not a prefix of the path.
 *
 * @example
 * // returns "/c"
 * getLayoutRelativePath("/a/b/c", "/a/b/");
 *
 * @example
 * // returns "/c/d/e"
 * getLayoutRelativePath("/a/b/c/d/e", "/a/b/");
 */

export function getLayoutRelativePath(path: string, layoutPath: string) {
    // check if the layout path is a prefix of the path
    if (!path.startsWith(layoutPath)) {
        throw new Error('The layout path is not a prefix of the path');
    }

    const pathSegments = path.split('/').filter(Boolean);
    const layoutSegments = layoutPath.split('/').filter(Boolean);

    const relativePathSegments = pathSegments.slice(layoutSegments.length);

    return '/' + relativePathSegments.join('/');
}
