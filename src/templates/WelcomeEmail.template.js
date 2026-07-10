const WelcomeEmailTemplate = ({ name }) => {
    return `
    <!DOCTYPE html>
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

            <h2>Welcome, ${name}!</h2>

            <p>
                Thank you for signing up for <strong>CityCare</strong>.
            </p>

            <p>
                Your account has been created successfully, and you're ready to get started.
            </p>

            <p>
                If you have any questions or need assistance, feel free to reach out to our support team.
            </p>

            <br>

            <p>
                Best regards,<br>
                <strong>CityCare Team</strong>
            </p>

        </body>
    </html>
    `;
};

export default WelcomeEmailTemplate;