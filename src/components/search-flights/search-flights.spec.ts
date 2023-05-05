import { screen } from "@testing-library/vue";
import SearchFlights from "./search-flights.vue";
import { renderComponent } from "@/tests/render-component";

describe("SearchFlights", () => {
  it("should have required fields", () => {
    renderComponent(SearchFlights);
    const origin = screen.getByText(/origin/i);
    const destination = screen.getByText(/destination/i);
    const departureDate = screen.getByText(/departure date/i);
    const submitBtn = screen.getByText(/search flights/i);

    expect(origin).toBeTruthy();
    expect(destination).toBeTruthy();
    expect(departureDate).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });
});
