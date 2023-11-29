const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const nodemailer = require('nodemailer');
const usermodel = require('./models/Users')
const app = express()
const bodyParser = require('body-parser');
const Job = require("./models/Jobs");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

mongoose.connect("mongodb://localhost:27017/beeproject");

app.use(express.json())
app.use(cors())
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    mongoose.connection.db.createCollection('register', (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Collection "register" created');
        }
    });
});


const secretKey = '123';

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ success: false, message: 'No token provided' });
    }

    const tokenParts = token.split(' ');
    const tokenValue = tokenParts[1];

    jwt.verify(tokenValue, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to authenticate token' });
        }

        req.decoded = decoded;
        next();
    });
};

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Received login request for email:', email);
        const user = await usermodel.findOne({ email: email });
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            console.log('Invalid credentials');
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        console.log('Login successful for user:', user.email);

        // Create a JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
            expiresIn: 86400,
        });

        return res.json({ success: true, token, cat: user.category, user });
    } catch (error) {
        console.error('Error processing login request:', error);
        return res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       console.log('Received login request for email:', email);
//       const user = await usermodel.findOne({ email: email });
//       if (!user) {
//         console.log('User not found');
//         return res.status(404).json({ success: false, message: 'User not found' });
//       }
  
//       const matchPassword = await bcrypt.compare(password, user.password);
//       if (!matchPassword) {
//         console.log('Invalid credentials');
//         return res.status(400).json({ success: false, message: 'Invalid credentials' });
//       }
  
//       console.log('Login successful for user:', user.email);

//       const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
//         expiresIn: 86400,
//       });
  
//       res.json({ success: true, token, cat: user.category, user });
//     } catch (error) {
//       console.error('Error processing login request:', error);
//       res.status(500).json({ success: false, error: 'Something went wrong' });
//     }
//   });
  


  app.delete('/jobs/:id', async (req, res) => {
    try {
        const jobId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(jobId)) {
            return res.status(400).json({ error: 'Invalid job ID' });
        }

        const deletedJob = await Job.findOneAndDelete({ _id: jobId });

        if (!deletedJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        // console.log('Job deleted successfully:', deletedJob);
        res.json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.post('/register', async (req, res) => {
    const { name, email, password, category } = req.body;

    try {
        
        const existingUser = await usermodel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await usermodel.create({
            name: name,
            email: email,
            password: hashedPassword,
            category: category,
        });

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, secretKey, {
            expiresIn: 86400, 
        });

        sendRegistrationEmail(email, name);

        res.status(201).json({ success: true, message: 'User registered successfully', token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
});





app.post('/jobs', async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            applicationInstructions,
            companyName,
            location,
            salaryRange,
            employmentType,
            industry,
            companyDescription,
            contactEmail,
            contactPhone,
            applicationDeadline,
        } = req.body;

        const newJob = new Job({
            title,
            description,
            requirements,
            applicationInstructions,
            companyName,
            location,
            salaryRange,
            employmentType,
            industry,
            companyDescription,
            contactEmail,
            contactPhone,
            applicationDeadline,
        });
        
        await newJob.save();
        res.json({ message: 'Job listing created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error submitting job listing' });
    }
});

app.get('/jobs/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(jobId)) {
            return res.status(400).json({ error: 'Invalid job ID' });
        }

        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.json(job);
    } catch (error) {
        console.error('Error getting job details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/jobs/:id', async (req, res) => {
    try {
        const jobId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(jobId)) {
            return res.status(400).json({ error: 'Invalid job ID' });
        }

        const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, { new: true });

        if (!updatedJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.json(updatedJob);
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching jobs' });
    }
});

app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    const verificationCode = generateRandomCode();
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    try {
        
        const user = await usermodel.findOneAndUpdate(
            { email },
            { verificationCode, verificationCodeExpires: expirationTime },
            { new: true }
        );

        if (user) {
            sendEmail(email, 'Password Recovery Code', `Your verification code is: ${verificationCode}`);

            res.json({ success: true, message: 'Verification code sent successfully' });
        } else {
            res.status(404).json({ success: false, error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error generating verification code' });
    }
});

app.post('/verify-code', async (req, res) => {
    const { email, code } = req.body;

    try {
        const user = await usermodel.findOne({ email, verificationCode: code, verificationCodeExpires: { $gt: new Date() } });

        if (user) {
            res.json({ success: true, message: 'Code verified successfully' });
        } else {
            res.json({ success: false, error: 'Incorrect code or code expired' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error verifying code' });
    }
});

app.post('/update-password', async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const updatedUser = await usermodel.findOneAndUpdate(
            { email },
            { password: newPassword, verificationCode: null, verificationCodeExpires: null },
            { new: true }
        );

        if (updatedUser) {
            res.json({ success: true, message: 'Password updated successfully' });
        } else {
            res.json({ success: false, error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error updating password' });
    }
});

function sendEmail(to, subject, text) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sharmasambhav06@gmail.com',
            pass: 'prwa zybi henb kzsx', 
        },
    });

    var mailOptions = {
        from: 'sharmasambhav06@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendRegistrationEmail(email, name) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sharmasambhav06@gmail.com',
            pass: 'prwa zybi henb kzsx'
        }
    });

    var mailOptions = {
        from: 'sharmasambhav06@gmail.com',
        to: email,
        subject: 'Welcome to ourSite',
        text: `Dear ${name},\n\nThank you for registering on OurSite.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
app.get('/me', verifyToken, async (req, res) => {
    try {
        const userEmail = req.decoded.email;
        const user = await usermodel.findOne({ email: userEmail }).select('name email');

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        console.log(user);
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ success: false, message: 'Error fetching user details', error: error.message });
    }
});




app.listen(3001, () => {
    console.log("server is running")
})