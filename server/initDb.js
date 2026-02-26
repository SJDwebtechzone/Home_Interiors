const pool = require('./db');

async function initDb() {
    console.log("Connecting to PostgreSQL to initialize tables...");
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS projects (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                title VARCHAR(100),
                status VARCHAR(50),
                progress INTEGER,
                phase VARCHAR(50),
                img VARCHAR(255)
            );

            CREATE TABLE IF NOT EXISTS payments (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                amount DECIMAL(10, 2),
                date DATE,
                status VARCHAR(50),
                description VARCHAR(255)
            );
        `);
        console.log("Tables structure ready.");

        // Add dummy user if not exists
        const res = await pool.query('SELECT * FROM users WHERE email = $1', ['test@example.com']);
        if (res.rows.length === 0) {
            console.log("No dummy data found, inserting test user, projects, and payments...");
            await pool.query(`
                INSERT INTO users (name, email, password) VALUES ('Jane Doe', 'test@example.com', 'password123');
            `);
            const userRes = await pool.query('SELECT id FROM users WHERE email = $1', ['test@example.com']);
            const userId = userRes.rows[0].id;

            await pool.query(`
                INSERT INTO projects (user_id, title, status, progress, phase, img) VALUES 
                ($1, 'The Sky Villa', 'In Progress', 65, 'Procurement', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600'),
                ($1, 'Zen Office', 'Completed', 100, 'Final Handover', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600');
            `, [userId]);

            await pool.query(`
                INSERT INTO payments (user_id, amount, date, status, description) VALUES 
                ($1, 150000.00, '2023-09-15', 'Paid', 'Advance Booking'),
                ($1, 250000.00, '2023-10-20', 'Paid', 'Procurement Phase 1'),
                ($1, 75000.00, '2023-11-10', 'Pending', 'Installation Milestone');
            `, [userId]);
            console.log("Initialization complete. Dummy data added! You can login with test@example.com / password123");
        } else {
            console.log("Dummy user 'test@example.com' already exists. Skipping data insertion.");
        }
    } catch (err) {
        console.error("Critical error initializing database:", err);
    } finally {
        pool.end();
    }
}

initDb();
