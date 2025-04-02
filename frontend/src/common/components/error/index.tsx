import { FallbackProps } from "react-error-boundary";
import { Anchor, Pre, Title1 } from "../../styles";
import { ErrorWrapper, StyledInput, StyledParagraph } from "./styles";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <ErrorWrapper>
      <div>
        <Title1>Oops...</Title1>
        <StyledParagraph>Something went wrong:</StyledParagraph>
        <Pre>{error.message}</Pre>
        <StyledInput
          type="button"
          onClick={resetErrorBoundary}
          value="Try again"
        />
        <Anchor to="/">Go back home</Anchor>
      </div>
    </ErrorWrapper>
  );
};
