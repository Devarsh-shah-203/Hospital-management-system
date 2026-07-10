export const appointmentConfirmationTemplate = ({
    name,
    date,
    time,
    doctorName,
    queueNo,
    queuePos,
}) => {
    return `
    <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">

            <div style="background:#2563eb; color:#fff; padding:20px; text-align:center;">
                <h1 style="margin:0;">Appointment Confirmed ✅</h1>
            </div>

            <div style="padding:30px; color:#333;">
                <h2>Hello ${name},</h2>

                <p>
                    Your appointment has been successfully booked. Here are your appointment details:
                </p>

                <table style="width:100%; border-collapse:collapse; margin:20px 0;">
                    <tr>
                        <td style="padding:10px; font-weight:bold;">Doctor</td>
                        <td style="padding:10px;">Dr. ${doctorName}</td>
                    </tr>

                    <tr style="background:#f9f9f9;">
                        <td style="padding:10px; font-weight:bold;">Date</td>
                        <td style="padding:10px;">${date}</td>
                    </tr>

                    <tr>
                        <td style="padding:10px; font-weight:bold;">Time</td>
                        <td style="padding:10px;">${time}</td>
                    </tr>

                    <tr style="background:#f9f9f9;">
                        <td style="padding:10px; font-weight:bold;">Queue Number</td>
                        <td style="padding:10px;">#${queueNo}</td>
                    </tr>

                    <tr>
                        <td style="padding:10px; font-weight:bold;">Queue Position</td>
                        <td style="padding:10px;">${queuePos}</td>
                    </tr>
                </table>

                <div style="background:#eff6ff; border-left:4px solid #2563eb; padding:15px; margin:20px 0;">
                    <strong>Reminder</strong>
                    <ul style="margin:10px 0;">
                        <li>Please arrive at least <strong>15 minutes early</strong>.</li>
                        <li>Bring any previous medical reports or prescriptions.</li>
                        <li>If you cannot attend, kindly cancel or reschedule your appointment.</li>
                    </ul>
                </div>

                <p>We look forward to seeing you.</p>

                <p>
                    Regards,<br>
                    <strong>Hospital Management Team</strong>
                </p>
            </div>

            <div style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#666;">
                This is an automated email. Please do not reply.
            </div>

        </div>
    </div>
    `;
};