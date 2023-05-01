'use client';

import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  background-color: white;
  margin-bottom: 100px;
  padding: 20px;
  height: 350px;
  width: 300px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 40px;
`;

export const RegisterBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;

  .upload-img {
    //'프로필 사진 추가' 버튼
    margin-bottom: 20px;
  }
  .button {
    font-size: 15px;
  }
  .profile-img-box {
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
    margin-bottom: 10px;
    // TODO: 사진을 가운데 두고싶은데 잘 안됨,,
    margin: 10px 25%;
  }
  .pre-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
  }
  .nick-input {
    border: 0;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
`;
