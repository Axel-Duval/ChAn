import { List, ListItem, Title3 } from "../../../../../common/styles";
import { StackItemWrapper, StyledLogo, StyledParagraph } from "./styles";

interface IProps {
  src: string;
  title: string;
  subtitles: string[];
}

export const StackItem = ({ src, title, subtitles }: IProps) => (
  <StackItemWrapper>
    <StyledLogo src={src} alt={title} />
    <div>
      <Title3>{title}</Title3>
      <List>
        {subtitles.map((subtitle) => (
          <ListItem key={subtitle}>
            <StyledParagraph>{subtitle}</StyledParagraph>
          </ListItem>
        ))}
      </List>
    </div>
  </StackItemWrapper>
);
