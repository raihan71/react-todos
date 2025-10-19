import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";

import App from "./App";
const React = require("react");
const { QueryClient, QueryClientProvider } = require("react-query");

expect.extend(toHaveNoViolations);

jest.mock("./service/todos", () => ({
  getTodos: jest
    .fn()
    .mockResolvedValue([{ id: 1, text: "Sample todo", completed: false }]),
  addTodo: jest
    .fn()
    .mockImplementation((todo) => Promise.resolve({ id: Date.now(), ...todo })),
  deleteTodo: jest.fn().mockResolvedValue(true),
  updateTodo: jest.fn().mockImplementation((todo) => Promise.resolve(todo)),
}));

jest.mock("@testing-library/react", () => {
  const rtl = jest.requireActual("@testing-library/react");

  const createTestQueryClient = () =>
    new QueryClient({ defaultOptions: { queries: { retry: false } } });

  return {
    ...rtl,
    render: (ui, options) =>
      rtl.render(
        React.createElement(
          QueryClientProvider,
          { client: createTestQueryClient() },
          ui
        ),
        options
      ),
  };
});

describe("App component", () => {
  test("should have no accessibility violations", async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
