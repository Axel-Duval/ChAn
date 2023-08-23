import { Item } from "../../../common/components/item";
import { VersionsWrapper } from "./styles";

export const Versions = () => (
  <VersionsWrapper>
    <Item
      number={"v1.0"}
      title={"Application"}
      subtitles={["Open source", "Active developers", "Big community"]}
    />

    <Item
      number={"2022"}
      title={"New features"}
      subtitles={["Message encryption", "Room hexaCode"]}
    />
  </VersionsWrapper>
);
