import { useAppSelector } from "../../store/hooks";
import { SyntheticDataRoot } from "./styles";
import SyntheticDataGeneratedDataset from "./syntheticDataGeneratedDataset";
import SyntheticDataGenerationSettings from "./syntheticDataGenerationSettings";

export default function SyntheticDataContents() {
  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);

  return (
    <>
      <SyntheticDataRoot>
        <SyntheticDataGenerationSettings />
        {syntheticDocuments && <SyntheticDataGeneratedDataset />}
      </SyntheticDataRoot>
    </>
  );
}
