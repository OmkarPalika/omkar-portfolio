export function isValidUrl(url: string | null | undefined): boolean {
  try {
    // Handle null, undefined, or empty strings
    if (!url || url.trim() === "") {
      console.error("Invalid URL: URL is empty or undefined");
      return false;
    }

    // Allow relative URLs (e.g., "#projects")
    if (url.startsWith("#")) {
      return true;
    }

    // Validate absolute URLs
    new URL(url);
    return true;
  } catch (error) {
    console.error("Invalid URL:", url, error);
    return false;
  }
}