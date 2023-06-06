import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './style/util.css'
import './style/main.css'
import image from './img/hand2.png'
import Tilt from 'react-parallax-tilt';

const SignLanguageForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const PasswordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        if (passwordRef.current.value !== 
        PasswordConfirmRef.current.value) {
            return setError('Passwords do not match');
            
        }
        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/map');
        } catch{
            setError('Failed to create an account');
        }

        setLoading(false);
    }

  return (
    <div className="limiter" >
      <div className="container-login100">
        <div className="wrap-signup100">
          <div className="login100-pic js-tilt" data-tilt>
          <Tilt scale={1.2} perspective={1000}>
          <img src={image} alt="mine" />
          </Tilt>
          </div>

          <div className="login100-form validate-form">
            <span className="login100-form-title">Júıge tirkelý</span>
            {error && <Alert variant='danger'>{error}</Alert>}
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                ref={emailRef}
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                ref={passwordRef}
                className="input100"
                type="password"
                name="pass"
                placeholder="Qupıa"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                ref={PasswordConfirmRef}
                className="input100"
                type="password"
                name="pass"
                placeholder="Qupıany qaitala"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button onClick={handleSubmit} className="login100-form-btn">Tirkelý</button>
            </div>
            <div className="text-center p-t-136">
              <a className="txt2" href="authorization.html">
              <Link to={'/login'}>Kiru </Link>
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageForm;