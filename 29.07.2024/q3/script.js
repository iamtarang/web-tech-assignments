function validateCredentials(username, password) {
    // Check if username or password is blank
    if (username.trim() === "" || password.trim() === "") {
        return "Username and password cannot be blank.";
    }

    // Check if username starts with _, @, or a number
    if (/^[_@0-9]/.test(username)) {
        return "Username cannot start with _, @, or a number.";
    }

    // Check password length
    if (password.length < 6 || password.length > 12) {
        return "Password must be between 6 and 12 characters long.";
    }

    // If all checks pass
    return "Valid credentials.";
}

// Example usage:
console.log(validateCredentials("john_doe", "pass123")); // Valid credentials.
console.log(validateCredentials("_john", "pass123")); // Username cannot start with _, @, or a number.
console.log(validateCredentials("john", "pass")); // Password must be between 6 and 12 characters long.
console.log(validateCredentials("", "")); // Username and password cannot be blank.