import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders the title prop in the app bar", () => {
    render(
      <Layout title="Test Title">
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the child content", () => {
    render(
      <Layout title="Test Title">
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
