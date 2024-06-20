'''const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/test/security', (req, res) => {
    // Security testing logic here
    res.send('Security testing started');
});

app.get('/test/gui', (req, res) => {
    // GUI testing logic here
    res.send('GUI testing started');
});

app.get('/test/performance', (req, res) => {
    // Performance testing logic here
    res.send('Performance testing started');
});

app.get('/test/unit', (req, res) => {
    // Unit testing logic here
    res.send('Unit testing started');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); '''

from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/test/security')
def security_test():
    # Replace with your security testing logic
    return 'Security testing started'

@app.route('/test/gui')
def gui_test():
    # Replace with your GUI testing logic
    return 'GUI testing started'

@app.route('/test/performance')
def performance_test():
    # Replace with your performance testing logic
    return 'Performance testing started'

@app.route('/test/unit')
def unit_test():
    # Replace with your unit testing logic
    return 'Unit testing started'

if __name__ == '__main__':
    app.run(debug=True)

