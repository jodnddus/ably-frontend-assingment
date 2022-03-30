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

const ButtonTag = styled.button<{ isDisable: boolean }>``;

export default Button;
