/**
 * Map HTTP status codes to user-friendly error messages
 */
export const getErrorMessage = (
  statusCode: number,
  defaultMessage: string,
): string => {
  const statusMessages: Record<number, string> = {
    400: "Invalid request. Please check your data.",
    401: "Authentication failed. Please log in again.",
    403: "You don't have permission to perform this action.",
    404: "The requested resource was not found.",
    429: "Too many requests. Please wait a moment and try again.",
    500: "Server error. Please try again later.",
    502: "Bad gateway. Please try again later.",
    503: "Service temporarily unavailable. Please try again later.",
  };

  return (
    defaultMessage ||
    statusMessages[statusCode] ||
    "An unexpected error occurred."
  );
};

/**
 * Check if error is rate limit (429)
 */
export const isRateLimitError = (status: number): boolean => status === 429;
