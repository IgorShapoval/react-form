import styled from "@emotion/styled";
import { Field } from "formik";

export const Input = styled(Field)`
  outline: none;
  margin: 0;
  border: none;
  box-shadow: none;
  font-size: 14px;
  font-family: inherit;
  line-height: 50px;
  background: #fafafa;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  transition: all 0.4s ease;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  line-height: 50px;
  padding: 0 50px;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 18px;
  color: #fff;
  font-family: poppins, arial, helvetica neue, sans-serif;
  background: #4272d7;
  outline: none;
  border: none;
  border-radius: 5px;

  :hover {
    background: #3868cd;
  }
`;

export const Select = styled(Field)`
  display: inline-block;
  margin: 0;
  width: 100%;
  outline: none;
  background: #fafafa;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 0 20px;
  height: 50px;
  border: none;
  font-size: 20px;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  color: #666;

  :not(:last-child) {
    margin-right: 30px;
  }
`;
