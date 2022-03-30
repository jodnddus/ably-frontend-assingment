import styled from "styled-components";

interface ButtonPropTypes {
  name: string;
  onClick(): void;
  isDisable: boolean;
  className?: string;
  testId?: string;
}

function Button({
  name,
  onClick,
  isDisable,
  className,
  testId,
}: ButtonPropTypes) {
  return (
    <ButtonTag
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
