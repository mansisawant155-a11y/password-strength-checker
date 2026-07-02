import random
import string


def generate_password(length=12):

    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    digits = string.digits
    symbols = "!@#$%^&*"

    # Ensure at least one character from each category
    password = [
        random.choice(lowercase),
        random.choice(uppercase),
        random.choice(digits),
        random.choice(symbols)
    ]

    # Remaining random characters
    all_characters = lowercase + uppercase + digits + symbols

    for _ in range(length - 4):
        password.append(random.choice(all_characters))

    # Shuffle for randomness
    random.shuffle(password)

    return "".join(password)