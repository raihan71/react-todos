import { render, screen } from "@testing-library/react";
import Foot from "../Foot";

describe("Footer tests", () => {
  describe("Footer tests", () => {
    test("renders footer text", () => {
      render(<Foot />);
      expect(screen.getByText(/by Raihan Nismara/i)).toBeInTheDocument();
      expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    });

    test("has container class", () => {
      const { container } = render(<Foot />);
      const el = container.querySelector(".container");
      expect(el).not.toBeNull();
    });

    test('renders with role "footer" (footer)', () => {
      render(<Foot />);
      const footer = screen.getByRole("footer");
      expect(footer).toBeInTheDocument();
    });
  });
});
