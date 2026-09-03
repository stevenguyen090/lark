export interface BlueprintItem { name: string; description: string }

export interface SolutionBlueprint {
  title: string;
  description: string;
  mermaid: string;
  mobileSteps: string[];
  systemRecords: BlueprintItem[];
  larkModules: BlueprintItem[];
  dataModel?: { entity: string; fields: string[]; owner: string };
  controls?: BlueprintItem[];
  rollout?: { phase: string; duration: string; description: string }[];
  adoption?: { metric: string; target: string }[];
  measurement?: { metric: string; before: string; after: string; method: string }[];
  delivery?: {
    complexity: string;
    clientEffort: string;
    dependencies: string[];
    outOfScope: string[];
  };
}
