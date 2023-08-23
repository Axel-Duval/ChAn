import { styled } from "../../../theme";

export const ProsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  & > div:last-of-type {
    margin-top: 200px;
  }
`;
ProsWrapper.displayName = "ProsWrapper";
