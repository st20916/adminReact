import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 유저 목록을 가져오는 함수
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://61.85.104.207:5000/user/list');
                // API에서 받아온 유저 목록을 상태에 저장
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        // 컴포넌트가 마운트될 때 데이터를 가져오도록 호출
        fetchUsers();
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

    return (
        <div className='App-userlist'>
            <h6 className="common-title">사용자 목록</h6>
            <div className='table-responsive'>
                <table className='table user-table'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <td className='text-center'>{index + 1}</td>
                                <td key={user.id}>{user.username}</td>
                                <td key={user.id}>{user.email}</td>
                                <td key={user.id} className='text-center'>{user.role_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );  
};

export default UserList;