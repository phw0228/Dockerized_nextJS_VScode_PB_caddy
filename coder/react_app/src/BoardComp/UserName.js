import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

// PocketBase 클라이언트 인스턴스 생성
const pb = new PocketBase('https://signforall.kro.kr/pb/'); // PocketBase 서버 주소

const UserName = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // 사용자 인증 함수
    const authenticate = async () => {
      try {
        // 인증 정보로 사용자 인증 수행
        await pb.collection('users').authWithPassword('email@gmail.com', 'EqE82NQN5ZGLVrW');
        // 인증 후 사용자 데이터 요청
        const userData = await pb.collection('users').getOne('bwinwr8c7i6m63n');
        setUsername(userData.username); // username 상태 업데이트
      } catch (error) {
        console.error('Authentication or data retrieval failed:', error);
      }
    }
    authenticate();
  }, []);

  return (
    <div>
      {username ? <p>Username: {username}</p> : <p>Loading...</p>}
    </div>
  );
};

export default UserName;
