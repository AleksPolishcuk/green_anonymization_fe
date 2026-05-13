import { useAppSelector } from "store/hooks";
import { SyntheticDataRoot } from "./styles";
import SyntheticDataGeneratedDataset from "./syntheticDataGeneratedDataset";

export default function SyntheticDataContents() {
  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);

  return (
    <>
      <SyntheticDataRoot>
        {syntheticDocuments && <SyntheticDataGeneratedDataset />}
      </SyntheticDataRoot>
    </>
  );
}
