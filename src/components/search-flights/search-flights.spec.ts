import { screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import SearchFlights from "./search-flights.vue";
import { renderComponent } from "@/tests/render-component";

describe("SearchFlights", () => {
  it("should have required fields", () => {
    renderComponent(SearchFlights);
    const origin = screen.getByText(/origin/i);
    const destination = screen.getByText(/destination/i);
    const departureDate = screen.getByText(/departure - return/i);
    const submitBtn = screen.getByText(/search flights/i);

    expect(origin).toBeTruthy();
    expect(destination).toBeTruthy();
    expect(departureDate).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });

  it("should change range mode if round trip changes", async () => {
    const user = userEvent.setup();

    renderComponent(SearchFlights);

    const tripsSelector = screen.getByTestId("trips-selector");
    expect(tripsSelector).toBeTruthy();

    await user.click(tripsSelector);

    const oneWayItem = screen.getByText(/one way/i);

    await user.click(oneWayItem);

    expect(screen.queryByText(/departure - return/i)).not.toBeTruthy();
  });
});
