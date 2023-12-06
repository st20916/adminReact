import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('')
        , [password, setPassword] = useState('')
        , [email, setEmail] = useState('')
        , navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://61.85.104.207:5000/api/signup', { 
                username, password, email 
            });
            navigate('/login');
        } catch (error) {
            alert(`${error}`);
        }
    };

    return (
        <div className="App-signup">
            <h6 className='sign-title'>회원가입</h6>
            <div className='sign-form'>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control form-control-sm" value={username} autoComplete='none' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control form-control-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-btn-group">
                        <button type="submit" className="btn btn--sm">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;