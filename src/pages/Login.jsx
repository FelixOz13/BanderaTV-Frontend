import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar/Navbar'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import'./auth.css'
import { login, reset } from '../features/auth/authSlice';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

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

    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div>
    <Navbar/>
   
    <div className="login-container"> {/* Centered container */}
      <section className="login-header">
        <h1 style={{color:'white', fontFamily:'Iceland'}}>
          <FaSignInAlt /> Ingresa tu Cuenta
        </h1>
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
              placeholder="Ingrese el Nombre de Usuario"
              onChange={onChange}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Ingrese una Contraseña"
              onChange={onChange}
              autoComplete="current-password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="login-button">
              Ingresar
            </button>
            <h5 className="register-link" style={{fontSize:'1rem'}}> 
              ¿No Tienes Cuenta? <Link to='/register'>Regístrate</Link>
            </h5>
          </div>
        </form>
      </section>
    </div>
    </div>
  );
}

export default Login;
