import { Item } from "../../../common/components/item";
import { ProsWrapper } from "./styles";

export const Pros = () => (
  <ProsWrapper>
    <Item
      number={"/01"}
      title={"Anonymous"}
      subtitles={["No signup", "No backup", "No trace"]}
    />

    <Item number={"/02"} title={"Free"} subtitles={["No fees", "No ads"]} />
  </ProsWrapper>
);
