import styled from "styled-components";

interface ButtonPropTypes {
  type: "button" | "submit" | "reset";
  name: string;
  isDisable: boolean;
  onClick?(): void;
  className?: string;
  testId?: string;
}

function Button({
  type,
  name,
  isDisable,
  onClick,
  className,
  testId,
}: ButtonPropTypes) {
  return (
    <ButtonTag
      type={type}
      className={className}
      onClick={onClick ? () => onClick() : undefined}
      disabled={isDisable}
      isDisable={isDisable}
      data-testid={testId}
    >
      {name}
    </ButtonTag>
  );
}

const ButtonTag = styled.button<{ isDisable: boolean }>`
  color: black;
  background-color: #f6f8fa;
  border: 0;
  width: 100%;
  height: 54px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid rgba(27 31 36 / 15%);
  transition: background-color 0.3s;
  &:hover {
    background-color: #f3f4f6;
  }
  &:active {
    background-color: #ebecf0;
  }
`;

export default Button;
