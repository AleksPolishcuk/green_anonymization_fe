export type WorkflowTour = {
  skipped: boolean;
  dashboard: boolean;
  deidentification: boolean;
  results: boolean;
  synthetic: boolean;
};

export default interface User {
  email: string;

  firstName: string;

  lastName: string;

  companyName: string;

  avatarUrl?: string | null;

  timezone?: string;

  workflowTour?: WorkflowTour | null;
}
