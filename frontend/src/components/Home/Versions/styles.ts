import { styled } from "../../../theme";

export const VersionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  & > div:first-of-type {
    margin-top: 200px;
  }
`;
VersionsWrapper.displayName = "VersionsWrapper";
