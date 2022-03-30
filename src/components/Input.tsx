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

const InputTag = styled.input<{ isError: boolean }>``;

export default Input;
