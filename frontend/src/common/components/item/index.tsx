import { ListItem, Title3 } from "../../styles";
import {
  ItemWrapper,
  Number,
  StyledDivider,
  StyledList,
  StyledParagraph,
} from "./styles";

interface IProps {
  number: string;
  title: string;
  subtitles: string[];
}

export const Item = ({ number, title, subtitles }: IProps) => (
  <ItemWrapper>
    <Number>{number}</Number>
    <StyledDivider />
    <Title3>{title}</Title3>
    <StyledList>
      {subtitles.map((subtitle) => (
        <ListItem key={subtitle}>
          <StyledParagraph>{subtitle}</StyledParagraph>
        </ListItem>
      ))}
    </StyledList>
  </ItemWrapper>
);
