import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders the title prop in the app bar", () => {
    render(
      <Layout title="Test Title">
        <div>Test Content</div>
      </Layout>
    );
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the child content", () => {
    render(
      <Layout title="Test Title">
        <div>Test Content</div>
      </Layout>
    );
    const contentElement = screen.getByText("Test Content");
    expect(contentElement).toBeInTheDocument();
  });
});
