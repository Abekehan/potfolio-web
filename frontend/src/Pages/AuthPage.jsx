import { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `/api/auth/${isLogin ? 'login' : 'register'}`;

    try {
      const res = await axios.post(url, { email, password });
      if (isLogin) {
        localStorage.setItem('token', res.data.token);
        setMsg('Успешный вход!');
      } else {
        setMsg('Пользователь создан, войдите.');
        setIsLogin(true);
      }
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Ошибка');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Войти' : 'Регистрация'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {isLogin ? 'Войти в аккаунт' : 'Создать аккаунт'}
        </button>
      </form>
      <p>{msg}</p>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        {isLogin ? 'Нет аккаунта? Создайте' : 'Уже есть аккаунт? Войдите'}
      </p>
    </div>
  );
};

export default AuthPage;
