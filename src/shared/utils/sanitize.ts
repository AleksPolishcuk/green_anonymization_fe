/**
 * Sanitize user input to prevent XSS attacks
 * Removes dangerous characters and HTML/JS code
 */
export const sanitizeInput = (input: string): string => {
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, "");

  // Remove script tags and content
  sanitized = sanitized.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );

  // Remove on* event handlers
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]*/gi, "");

  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, "");

  // Remove data: protocol (can be used for XSS)
  sanitized = sanitized.replace(/data:/gi, "");

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
};

/**
 * Validate field length
 */
export const isValidLength = (
  input: string,
  min: number,
  max: number,
): boolean => {
  const trimmed = input.trim();
  return trimmed.length >= min && trimmed.length <= max;
};

/**
 * Get field constraints
 */
export const FIELD_CONSTRAINTS = {
  firstName: { min: 2, max: 50 },
  lastName: { min: 2, max: 50 },
  email: { min: 5, max: 100 },
  phoneNumber: { min: 7, max: 30 },
  message: { min: 10, max: 5000 },
} as const;
