/**
 * This function extracts the error message from an error object.
 *
 * @param {unknown} err - The error object from which to extract the message.
 *
 * @param {string} defaultMsg - The default message to return if no message can be extracted from the error object.
 *                              Default value is 'An error occurred. Please try again later.'.
 *
 * @returns {string} - The extracted error message, or the default message if no message can be extracted.
 *
 * @example
 * // returns "An error occurred."
 * extractErrorMessage(new Error("An error occurred."));
 *
 * @example
 * // returns "An error occurred."
 * extractErrorMessage("An error occurred.");
 *
 * @example
 * // returns "{\"code\":500,\"message\":\"Internal Server Error\"}"
 * extractErrorMessage({code: 500, message: "Internal Server Error"});
 *
 * @example
 * // returns "An error occurred. Please try again later."
 * extractErrorMessage(123);
 */
export const extractErrorMessage = (
    err: unknown, defaultMsg: string = 'An error occurred. Please try again later.'
) => {
    let message: string = '';
    if (
        typeof err === 'object' &&
        err !== null &&
        'response' in err &&
        typeof err.response === 'object' &&
        err.response !== null &&
        'data' in err.response &&
        typeof err.response.data === 'object' &&
        err.response.data !== null &&
        'message' in err.response.data
        && typeof err.response.data.message === 'string'
    ) {
        message = err.response.data.message;
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
        message = JSON.stringify(err.message);
    } else if (err instanceof Error) {
        message = err.message;
    } else if (typeof err === 'string') {
        message = err;
    } else {
        message = defaultMsg;
    }

    return message;
};
