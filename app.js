const express = require('express');
const app = express();


app.get('/addDays/:days', (req, res) => {
    const daysToAdd = parseInt(req.params.days);
    const today = new Date();
    today.setDate(today.getDate() + daysToAdd);
    res.json({ date: today.toDateString() });
});


app.get('/addWeeks/:weeks', (req, res) => {
    const weeksToAdd = parseInt(req.params.weeks);
    const today = new Date();
    today.setDate(today.getDate() + weeksToAdd * 7);
    res.json({ date: today.toDateString() });
});


app.get('/subtractDays/:date/:days', (req, res) => {
    const targetDate = new Date(req.params.date);
    const daysToSubtract = parseInt(req.params.days);
    targetDate.setDate(targetDate.getDate() - daysToSubtract);
    res.json({ date: targetDate.toDateString() });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
