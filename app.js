const { add } = require('./math');  // Import fungsi dari math.js

document.getElementById('output').textContent = `2 + 3 = ${add(2, 3)}`;