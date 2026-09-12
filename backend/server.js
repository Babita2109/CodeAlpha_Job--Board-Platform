const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Job = require("./models/job");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/jobBoardDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

// Base Route (Serves index.html from public folder)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single job
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST New Job
app.post("/api/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT Update Job (Fixed Syntax Error here)
app.put('/api/jobs/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    );
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE Job
app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend & API: http://localhost:${PORT}`);
});