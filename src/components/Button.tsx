import styled from "styled-components";

interface ButtonPropTypes {
  type: "button" | "submit" | "reset";
  name: string;
  onClick(): void;
  isDisable: boolean;
  className?: string;
  testId?: string;
}

function Button({
  type,
  name,
  onClick,
  isDisable,
  className,
  testId,
}: ButtonPropTypes) {
  return (
    <ButtonTag
      type={type}
      className={className}
      onClick={() => onClick()}
      disabled={isDisable}
      isDisable={isDisable}
      data-testid={testId}
    >
      {name}
    </ButtonTag>
  );
}

const ButtonTag = styled.button<{ isDisable: boolean }>``;

export default Button;
