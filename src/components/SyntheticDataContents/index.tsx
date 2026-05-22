import { useAppSelector } from "store/hooks";
import SyntheticDataGeneratedDataset from "./syntheticDataGeneratedDataset";

export default function SyntheticDataContents() {
  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);

  if ((syntheticDocuments?.length ?? 0) === 0) {
    return null;
  }

  return <SyntheticDataGeneratedDataset />;
}
