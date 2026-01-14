import { Page } from "@playwright/test";

declare module "@playwright/test" {
  export interface Page {
    allowFlowErrors(): void;
  }
}
