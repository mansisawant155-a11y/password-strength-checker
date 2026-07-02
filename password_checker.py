import re

common_passwords = [
    "password",
    "123456",
    "123456789",
    "qwerty",
    "abc123",
    "password123",
    "admin",
    "welcome",
    "letmein"
]


def check_password(password):

    score = 0
    suggestions = []

    # Length
    if len(password) >= 8:
        score += 20
    else:
        suggestions.append("Use at least 8 characters.")

    # Uppercase
    if re.search(r"[A-Z]", password):
        score += 20
    else:
        suggestions.append("Add at least one uppercase letter.")

    # Lowercase
    if re.search(r"[a-z]", password):
        score += 20
    else:
        suggestions.append("Add at least one lowercase letter.")

    # Number
    if re.search(r"\d", password):
        score += 20
    else:
        suggestions.append("Include at least one number.")

    # Special Character
    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        score += 20
    else:
        suggestions.append("Include at least one special character.")

    # Common Password Check
    if password.lower() in common_passwords:
        score = max(score - 20, 0)
        suggestions.append("Avoid using common passwords.")

    # Determine Strength
    if score <= 40:
        strength = "Weak"

    elif score <= 80:
        strength = "Medium"

    else:
        strength = "Strong"

    return strength, score, suggestions