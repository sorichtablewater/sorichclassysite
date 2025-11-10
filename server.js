const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('../public')); // serve your HTML

// Dummy storage (replace with database if needed)
let salesData = [];
let debtData = [];
let expenseData = [];
let users = [{ username: 'admin', password: 'admin' }];

// LOGIN
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    res.json({ success: !!user });
});

// SALES
app.get('/api/sales', (req, res) => res.json(salesData));
app.post('/api/sales', (req, res) => { salesData.push(req.body); res.json({ success: true }); });

// DEBTS
app.get('/api/debts', (req, res) => res.json(debtData));
app.post('/api/debts', (req, res) => { debtData.push(req.body); res.json({ success: true }); });

// EXPENSES
app.get('/api/expenses', (req, res) => res.json(expenseData));
app.post('/api/expenses', (req, res) => { expenseData.push(req.body); res.json({ success: true }); });

app.listen(port, () => console.log(`Backend running at http://localhost:${port}`));
