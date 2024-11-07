import User from '../models/user.model.js'; 

// POST request to submit contact form data
const submitUser = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const newContact = new User({
            name,
            email,
            phone,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit contact form', error: error.message });
    }
};

export { submitUser };
