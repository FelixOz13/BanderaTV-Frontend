import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import './auth.css'; // Ensure your styles are imported

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container"> {/* Centered container */}
        <section className="login-header">
          <h1 style={{ color: 'white', fontFamily: 'Iceland' }}>
            <FaUser /> Regístrate
          </h1>
          <p style={{ color: 'white', fontFamily: 'Iceland' }}>Crea una Cuenta</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit} className="login-form"> {/* Apply login form class */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                placeholder="Ingresa tu Nombre de Usuario"
                onChange={onChange}
                autoComplete="current-username"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Ingresa tu Correo Electrónico"
                onChange={onChange}
                autoComplete="current-email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Ingresa tu Contraseña"
                onChange={onChange}
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirma tu Contraseña"
                onChange={onChange}
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="login-button">
                Registrar
              </button>
              <h5 className="register-link" style={{fontSize:'1rem'}}>
                ¿Ya Tienes Cuenta? <Link to='/login'>Inicia Sesión</Link>
              </h5>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;
