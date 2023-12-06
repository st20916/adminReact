import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BodyArea from './layout/body';

const Main = () => {
    const navigate = useNavigate()
        , location = useLocation()
        , [username, setUsername] = useState(null)
        , [roleName, setRoleName] = useState(null);
  
    // 페이지 로딩 시 로그인 상태 확인
    useEffect(() => {
        // Optional Chaning : 중첩 된 속성이나 배열 요소가 null or undefined 일 경우, 코드 에러를 발생시키지 않고, undefined로 반환
        const getUser = location.state?.userInfo.username
            , getRole = location.state?.userInfo.role_name;

        setUsername(getUser);
        setRoleName(getRole);

        const storedUsername = localStorage.getItem('username')
            , storedRoleName = localStorage.getItem('roleName');
        
        if (storedUsername) {
            setUsername(storedUsername);
            setRoleName(storedRoleName);
        }
    }, [location.state?.userInfo.username, location.state?.userInfo.role_name]);
    // useEffect Hook은 두 번째 매개변수로 의존성을 가짐.
    // 의존성 배열에 있는 값들이 변경 될 때만, useEffect Callback 함수가 실행
  
    const handleLoginClick = () => {
        navigate('/login');
    };
  
    // 로그아웃 버튼 클릭 시 세션에서 username 지우고 로그인 페이지로 이동
    const handleLogoutClick = () => {
        localStorage.removeItem('username');
        
        setUsername(null);
        navigate('/login');
    };
  
    return (
        <div className=''>
            {username ? (
                <>
                    {/* body에다가 Props :: username, rolename 던짐 */}
                    <div className='main_header'>
                        <div className='main_inner'>
                            <a href='/' className='logo'>React 기반 시스템</a>
                            <div className='main_util'>
                                <h2>환영합니다. {username}!</h2>
                                <button onClick={handleLogoutClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                    <BodyArea username={username} roleName={roleName} />
                </>
            ) : (
                <>
                    <div className='main_header'>
                        <div className='main_inner'>
                            <a href='/' className='logo'>React 기반 시스템</a>
                            <div className='main_util'>
                                <h2>로그인이 필요합니다.</h2>
                                <button onClick={handleLoginClick}>Login</button>
                            </div>
                        </div>
                    </div>
                    <BodyArea />
                </>
            )}
        </div>
    );
};

export default Main;