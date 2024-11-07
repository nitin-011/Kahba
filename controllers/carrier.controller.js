import Carrier from '../models/carrier.model.js';

// Add a new candidate
const addCandidate = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resume = req.file.path;  // The path to the uploaded resume file
    
    // Create a new candidate object
    const newCandidate = new Carrier({
      name,
      email,
      phone,
      resume
    });

    // Save the candidate to the database
    await newCandidate.save();
    
    res.status(201).json({ message: 'Candidate added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add candidate' });
  }
};

export { addCandidate };
