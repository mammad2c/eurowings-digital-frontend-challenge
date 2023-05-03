import { render, RenderOptions } from "@testing-library/vue";

const renderComponent = (
  component: unknown,
  renderOptions: RenderOptions = {},
) =>
  render(component, {
    global: {
      plugins: [],
    },
    ...renderOptions,
  });

export { renderComponent };
