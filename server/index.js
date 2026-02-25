const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow all origins
app.use(express.json());

const PORT = 5001; // CHANGED TO 5001 TO AVOID GHOST PROCESSES

// VERSION 4 - HAANAAK AUTOMATION
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'haanaak2@gmail.com',
        pass: 'ayoh mqwc lauo uyuq'
    }
});

transporter.verify((error) => {
    if (error) {
        console.log("❌ V4 CONNECTION ERROR:", error.message);
    } else {
        console.log("🚀 HAANAAK ENGINE V4: Online & Ready on Port 5001");
    }
});

app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, budget, message } = req.body;

    console.log(`📩 [V4] NEW INQUIRY: ${name} (${email})`);

    const mailOptions = {
        from: 'haanaak2@gmail.com',
        to: 'nagarjunbm90@gmail.com',
        subject: `✦ VIP Inquiry: ${name}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 2px solid #c9a84c; background: #1a1714; color: #fff; border-radius: 10px;">
                <h2 style="color: #c9a84c; border-bottom: 1px solid #c9a84c; padding-bottom: 10px;">New Haanaak Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <div style="margin-top: 20px; padding: 10px; background: #333; border-radius: 5px;">
                    <strong>Message:</strong><br/>${message}
                </div>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('❌ V4 SEND ERROR:', error.message);
            return res.status(500).json({ success: false, error: `[V4 API ERROR]: ${error.message}` });
        }
        console.log('✅ V4 SUCCESS:', info.response);
        res.status(200).json({ success: true, details: info.response });
    });
});

app.listen(PORT, () => {
    console.log(`\n--- HAANAAK SERVER V4 ---`);
    console.log(`Listening on http://localhost:${PORT}`);
    console.log(`Target Recipient: nagarjunbm90@gmail.com`);
});
