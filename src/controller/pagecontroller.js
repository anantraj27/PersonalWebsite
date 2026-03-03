import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const homePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/first.html'));
};

export const signinPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signin.html'));
};

export const signupPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/signup.html'));
};

export const secretPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Animation_dom/index.html'));
};

export const adminPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/Admin/admin.html'));
};
export const notes = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/mood/index.html'));
};
