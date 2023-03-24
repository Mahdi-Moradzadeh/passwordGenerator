# passwordGenerator
This program will generate a secure password with random eligible characters


## About the program
This program successfully prompts series of 'yes' or 'no' question where the user is able to decide the length of password between 8 to 128 characters, and can further choose to include upper case, lower case, and special characters witin the generated password.

The program then randomizes through the user's choice and genereates a random password with the desired criteria.

## Disclamer

Do not use this program to save passwords as this is demo and the random function of JavaScript is considered predicatble where your password might be subject target for hackers. Follow availible APIs to generate a more secure password.

## Flaws

At current moment, the password might not include **at least one** of the desired criteria but however it is included in the array that randomized the password.

This will be fixed with further modification and/or less likely to happen with longer passwords.

