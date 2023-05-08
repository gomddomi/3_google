// 'use client'; //
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Title, P, ContentWrap, BottomButton, Input } from '../../styles/accountDelete.styled';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};
interface AccountDeleteProps {
  open: boolean;
  handleClose: () => void;
}
export default function AccountDelete({ open, handleClose }: AccountDeleteProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [isInputValid, setIsInputValid] = React.useState(false);

  //유효성 검사
  const correctWord = '회원탈퇴를 동의합니다.';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInputValid(e.target.value === correctWord);
  };
  const showValidationMessage = inputValue && (isInputValid ? '입력되었습니다' : '일치하지 않습니다.');

  const handleConfirm = () => {
    if (isInputValid) {
      // 회원탈퇴 로직
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Title>회원탈퇴</Title>
          <ContentWrap>
            <P>✓ 탈퇴시 고객 정보가 삭제됩니다.</P>
            <P style={{ marginTop: '30px' }}>✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</P>
            <P style={{ marginTop: '30px' }}>✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다. (다른 아이디로 가입)</P>
            <P style={{ marginTop: '70px' }}> ✓ 다음을 입력해주세요 : </P>
            <P style={{ marginTop: '10px', color: 'red' }}>{correctWord}</P>
            <Input style={{ marginTop: '20px', fontSize: '14px', textAlign: 'center' }} value={inputValue} onChange={handleInputChange} />
            {showValidationMessage && <P style={{ marginTop: '10px' }}>{showValidationMessage}</P>}
          </ContentWrap>
          <BottomButton
            style={{
              marginTop: '50px',
              backgroundColor: isInputValid ? undefined : 'gray',
              cursor: isInputValid ? 'pointer' : 'not-allowed',
            }}
            onClick={handleConfirm}
            disabled={!isInputValid}
          >
            탈퇴하기
          </BottomButton>
        </Box>
      </Modal>
    </div>
  );
}
