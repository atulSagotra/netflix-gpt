export const checkValidData = (isSignInForm, name, email, password) => {
  const errorMessages = [];
  if (!isSignInForm) {
    if (!name || name.trim().length === 0) {
      errorMessages.push("Name cannot be empty.");
    }
  }
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  if (!isEmailValid) {
    errorMessages.push("Email is not valid.");
  }
  if (!isPasswordValid && !isSignInForm)
    errorMessages.push(
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
    );
  return errorMessages.length > 0 ? errorMessages.join("\n") : null;
};
