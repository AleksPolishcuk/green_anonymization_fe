import type { WorkflowTour } from "shared/interfaces/User";

export const buildWorkflowTourPayload = (
  current: WorkflowTour | null | undefined,
  update: Partial<WorkflowTour>,
): WorkflowTour => ({
  skipped: current?.skipped ?? false,
  dashboard: current?.dashboard ?? false,
  deidentification: current?.deidentification ?? false,
  results: current?.results ?? false,
  synthetic: current?.synthetic ?? false,
  ...update,
});
