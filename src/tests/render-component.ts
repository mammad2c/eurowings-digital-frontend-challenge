import { render, RenderOptions } from "@testing-library/vue";
import { Quasar } from "quasar";

const renderComponent = (
  component: unknown,
  renderOptions: RenderOptions = {},
) =>
  render(component, {
    global: {
      plugins: [Quasar],
    },
    ...renderOptions,
  });

export { renderComponent };
