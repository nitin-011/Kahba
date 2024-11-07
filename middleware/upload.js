import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Directory path for storing resumes
const uploadPath = 'uploads/resumes';

// Check if the directory exists, and if not, create it
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true }); // `recursive: true` to ensure nested directories are created
}

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);  // Specify the folder to store resumes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Use current timestamp + file extension for the name
  }
});

// File filter to accept only certain file types (e.g., PDFs, DOCs)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF and DOC files are allowed!'), false);
  }
};

// Set limits for file size, etc.
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: fileFilter
});

export default upload;
