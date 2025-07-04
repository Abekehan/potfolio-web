import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Регистрация
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) return res.status(400).json({ msg: 'Пользователь уже существует' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });

    res.status(201).json({ msg: 'Пользователь создан' });
});

// Логин
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'Пользователь не найден' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Неверный пароль' });

    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1d' });

    res.json({ token });
});

export default router;
