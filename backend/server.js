const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/student'); // adjust path as needed

const app = express();

app.use(cors());
app.use(express.json());

// Mount the student routes with this base path:
app.use('/api/v1/student', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
