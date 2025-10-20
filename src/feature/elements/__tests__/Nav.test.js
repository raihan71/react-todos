import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "../Nav";

// check this library https://github.com/guidepup/virtual-screen-reader

describe("Nav tests", () => {
  it("should contains button", () => {
    const handleDarkMock = jest.fn();
    render(<Nav handleDark={handleDarkMock} />);
    const button = screen.getByRole("button", { name: "Dark Mode" });
    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
  it("should render navigiation", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: "Navigation" });
    fireEvent.click(nav);
    expect(nav).toBeInTheDocument();
  });

  // it("should have no accessibility violations", async () => {
  //   const { container } = render(<About />);
  //   const results = await axe(container);
  //   expect(results).toHaveNoViolations();
  // });
});
