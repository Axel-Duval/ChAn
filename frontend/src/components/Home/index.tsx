import { FlexSection, Section } from "../../common/styles";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Pros } from "./Pros";
import { Picture, Wrapper } from "./styles";
import { Versions } from "./Versions";

export const Home = () => (
  <Wrapper>
    <Picture src="./pictures/background.jpg" />

    <Navigation />

    <Section>
      <Pros />
      <Header />
    </Section>

    <FlexSection>
      <Form />
      <Description />
    </FlexSection>

    <Section>
      <Versions />
    </Section>

    <Footer />
  </Wrapper>
);
