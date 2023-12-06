import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
        , [password, setPassword] = useState('')
        , navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://61.85.104.207:5000/api/login', { username, password })
            .then(response => {
                const userInfo = response.data;

                // main 페이지로 이동
                navigate('/', {
                    state: { userInfo }
                });
            })
            .catch(error => {
                alert('로그인에 실패하였습니다. ID 또는 Password를 확인해 주세요.');
            });
    };

    return (
        <div className="App-login">
            <div className="login-wrap">
                <div className="login-background"></div>
                <div className="login-form-area">
                    <div className="login-form">
                        <h4 className="login-title">React 기반 시스템</h4>
                        <h6 className="login-sub">서비스 이용을 위해 로그인 해주세요.</h6>
                        <div className="login-input-group">
                            <label className="form-label">아이디</label>
                            <input type="text" className="form-control" placeholder="User name" value={username} autoComplete="none" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label className="form-label">비밀번호</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login-util">

                        </div>
                        <div className="login-btn-group">
                            <button className="btn btn-block btn-login" onClick={handleLogin}>로그인</button>
                            <Link to="/signup"><button className="btn btn-block btn-sign">회원가입</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;