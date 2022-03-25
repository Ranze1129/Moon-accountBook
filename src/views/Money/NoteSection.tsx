import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      border: none;
      background: none;
      height: 72px;
    }
  }
`;

const NoteSection:React.FC= ()=>{
  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = ()=>{
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }
  return(
    <Wrapper>
      <label>
        <span>备注:</span>
        <input type="text" placeholder="点击写备注..."
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export {NoteSection}