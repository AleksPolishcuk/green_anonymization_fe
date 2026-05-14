import { useAppSelector } from "store/hooks";
import SyntheticDataGeneratedDataset from "./syntheticDataGeneratedDataset";

export default function SyntheticDataContents() {
  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);

  return <>{syntheticDocuments && <SyntheticDataGeneratedDataset />}</>;
}
