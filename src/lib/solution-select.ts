export const SELECT_SOLUTION_EVENT = "select-solution";

export function selectSolutionTab(serviceSlug: string) {
  window.dispatchEvent(
    new CustomEvent<string>(SELECT_SOLUTION_EVENT, { detail: serviceSlug }),
  );
}
