import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";

import Dynamic from "../Dynamic";

expect.extend(toHaveNoViolations);

it("should have no accessibility violations caught by jest-axe", async () => {
  const { container } = render(<Dynamic as="p" children={"hello world"} />);
  // const { container } = render(<Dynamic />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
