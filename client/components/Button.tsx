"use client";
import styled, { css } from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit";
  variant?: "default" | "circle";
};

const StyledButton = styled.button<{
  $fullWidth?: boolean;
  $variant?: "default" | "circle";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sohoLights);
  color: black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  ${({ $variant }) =>
    $variant === "circle"
      ? css`
          width: 32px;
          height: 32px;
          padding: 0;
          border-radius: 12px;
          font-size: 1rem;
        `
      : css`
          padding: 15px 20px;
          font-size: 1rem;
          border-radius: 8px;
        `}

  ${({ $fullWidth, $variant }) =>
    $fullWidth &&
    $variant !== "circle" &&
    css`
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
      }
    `}

  &:hover {
    background-color: var(--plum);
  }
`;

const Button = ({
  children,
  onClick,
  fullWidth = false,
  variant = "default",
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $fullWidth={fullWidth}
      $variant={variant}
      type={type}
      role="button"
    >
      {children}
    </StyledButton>
  );
};

export default Button;
