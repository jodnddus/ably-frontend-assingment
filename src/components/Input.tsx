import styled from "styled-components";

interface InputPropTypes {
  type: string;
  value: string;
  isError: boolean;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  tabIndex?: number;
  inputRef?: React.RefObject<HTMLInputElement>;
  testId?: string;
}

function Input({
  type,
  value,
  isError,
  onChange,
  autoFocus,
  tabIndex,
  inputRef,
  testId,
}: InputPropTypes) {
  return (
    <InputTag
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoFocus={autoFocus}
      isError={isError}
      tabIndex={tabIndex}
      ref={inputRef}
      data-testid={testId}
    />
  );
}

const InputTag = styled.input<{ isError: boolean }>`
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 8.5px 16px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 18px;
  height: 45px;
  &:focus {
    border-color: #0969da;
    outline: none;
    box-shadow: 0 0 0 3px #0969da4d;
  }
`;

export default Input;
