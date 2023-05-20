import styled from "styled-components";

export const List = styled.ul`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin-top: 20px;
  margin-left: 20px;
  gap: 10 px;
`;
export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
  gap: 20px;



`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Button = styled.button`
    display: block;
    width: auto;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    border: 1px solid #131468;
    border-radius: 8px;
    background: #3537ff;
    background: -webkit-gradient(linear, left top, left bottom, from(#3537ff), to(#131468));
    background: -moz-linear-gradient(top, #3537ff, #131468);
    background: linear-gradient(to bottom, #3537ff, #131468);
    -webkit-box-shadow: #4042ff 0px 0px 40px 0px;
    -moz-box-shadow: #4042ff 0px 0px 40px 0px;
    box-shadow: #4042ff 0px 0px 40px 0px;
    text-shadow: #0b0b3a 1px 1px 1px;
    font: normal normal bold 20px comic sans ms;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;`;

export const StyledInput = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  outline: none;
  background-color: #d4bfd3;
  color: #50174c;
  border: 1px solid #d4bfd3;
  height: 50px;
  width: auto;
  border-radius: 4px;
  padding: 0 20px;
  transition: 300ms;
  cursor: pointer;
  ::placeholder {
    color:#50174c;
  }
`;

export const LiStyled = styled.li`
overflow: 'hidden';
  margin: '30px';
    width: 'calc((100% - 20px) / 3)';
    border: '1px solid #eeeeee';
    objectFit:'contain';
    transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)';
    `