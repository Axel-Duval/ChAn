import { Link } from "react-router-dom";
import { styled } from "../../theme";

export const Container = styled.div`
  width: 100%;
`;
Container.displayName = "Container";

export const Pre = styled.pre`
  font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
  font-size: ${(props) => props.theme.font.size.sm};
  padding: ${(props) => props.theme.space.xxs}
    ${(props) => props.theme.space.xs};
  margin: ${(props) => props.theme.space.sm} 0;
  border: solid 1px ${(props) => props.theme.color.blue.ryb};
  color: ${(props) => props.theme.color.blue.ryb};
  background-color: transparent;
  border-radius: 2px;
  text-align: center;
  user-select: none;
  white-space: pre-wrap;
  text-align: left;
`;
Pre.displayName = "Pre";

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 50vh;
  margin: 10% 0;
`;
Section.displayName = "Section";

export const FlexSection = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  @media only screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;
FlexSection.displayName = "Section.Flex";

export const Title1 = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: clamp(1rem, 5vw, 50px);
  line-height: clamp(1rem, 5vw, 50px);
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.color.white};
`;
Title1.displayName = "Title.1";

export const Title2 = styled.h2`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xl};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  color: ${(props) => props.theme.color.white};
`;
Title2.displayName = "Title.2";

export const Title3 = styled.h3`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.lg};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color.white};
`;
Title3.displayName = "Title.3";

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.regular};
  text-align: justify;
`;
Paragraph.displayName = "Paragraph";

export const Anchor = styled(Link)`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  padding: ${(props) => props.theme.space.xs};
  color: ${(props) => props.theme.color.muted};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    text-underline-offset: ${(props) => props.theme.space.sm};
  }
`;
Anchor.displayName = "Link";

export const ButtonAnchor = styled.a`
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.semibold};
  padding: ${(props) => props.theme.space.xs};
  color: ${(props) => props.theme.color.muted};
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    text-underline-offset: ${(props) => props.theme.space.sm};
    color: ${(props) => props.theme.color.white};
  }
`;
ButtonAnchor.displayName = "ButtonLink";

export const ListItem = styled.li``;
ListItem.displayName = "List.Item";

export const List = styled.ul``;
List.displayName = "List";

export const Field = styled.div`
  margin: ${(props) => props.theme.space.md} 0;
`;
Field.displayName = "Field";

export const Label = styled.label`
  font-family: ${(props) => props.theme.font.family.secondary};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.bold};
  white-space: pre-wrap;
  margin: 0 ${(props) => props.theme.space.xs};
  user-select: none;
`;
Label.displayName = "Label";

export const Input = styled.input`
  font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
  font-size: ${(props) => props.theme.font.size.md};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  margin: ${(props) => props.theme.space.xs};
  border: solid 1px ${(props) => props.theme.color.ultra};
  color: ${(props) => props.theme.color.muted};
  background-color: transparent;
  border-radius: 2px;

  &:disabled {
    text-decoration: line-through;
  }

  &:not(:disabled) {
    &:hover {
      color: ${(props) => props.theme.color.white};
    }

    &:focus,
    &:active,
    &:target {
      border-color: ${(props) => props.theme.color.white};
    }
  }

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color.ultra};
  }

  &::-ms-input-placeholder {
    color: ${(props) => props.theme.color.ultra};
  }

  &[type="button"],
  &[type="submit"],
  &[type="color"],
  &[type="reset"] {
    cursor: pointer;
  }

  &[type="color"] {
    -webkit-appearance: none;
    padding: ${(props) => props.theme.space.xs};
    width: 78px;
    height: 39px;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      border-radius: 2px;
    }
  }
`;
Input.displayName = "Input";

export const Button = styled.button`
  display: block;
  font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
  font-size: ${(props) => props.theme.font.size.md};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  border: solid 1px ${(props) => props.theme.color.ultra};
  color: ${(props) => props.theme.color.muted};
  background-color: transparent;
  border-radius: 2px;
  cursor: pointer;

  &:not(:disabled) {
    &:hover {
      color: ${(props) => props.theme.color.white};
    }

    &:focus,
    &:active,
    &:target {
      border-color: ${(props) => props.theme.color.white};
    }
  }
`;
Button.displayName = "Button";
