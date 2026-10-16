export const STUDENT_PORTAL_URL =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_STUDENT_PORTAL_URL) ||
  "http://localhost:5180";
