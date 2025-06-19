class ApiError extends Error {
  // Good practice: statusCode as the first parameter, followed by message and optional errors
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message); // Call parent Error constructor with the message
    this.statusCode = statusCode;
    this.data = null; // Can be null or an empty object {}
    this.message = message; // Redundant, but harmless if super() already set it
    this.success = false; // ApiError typically means failure

    // Correctly assign the errors array from parameter. Initialize to empty array if not provided.
    this.errors = errors;

    // Correctly handle stack trace:
    // If a 'stack' string is explicitly provided, use it.
    // Otherwise, capture the stack trace at the point where ApiError was instantiated.
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
