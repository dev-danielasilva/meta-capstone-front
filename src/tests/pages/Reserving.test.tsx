import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reserving from "../../pages/Reserving";

describe("Reserving component", () => {
  test("renders component", () => {
    render(<Reserving />);
    expect(screen.getByText("Reserving a Table")).toBeInTheDocument();
  });

  test("handles form submission with valid data", async () => {
    render(<Reserving />);

    fireEvent.change(screen.getByLabelText("Name for reservation"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Contact"), {
      target: { value: "(555) 555-5555" },
    });

    // Simulate selecting a date and time (adjust based on your component structure)
    fireEvent.change(screen.getByLabelText("Date & Time"), {
      target: { value: "01/15/2024 12:00 PM" },
    });

    fireEvent.click(screen.getByText("Reserve Now!"));

    // Wait for asynchronous actions to complete (e.g., mock API calls)
    await waitFor(() => {
      // Add assertions based on your expected behavior after form submission
      expect(screen.getByText("Reservation successful")).toBeInTheDocument();
      // You may also check if the console.log statements are called with the correct values
      expect(console.log).toHaveBeenCalledWith("hey!!!");
      expect(console.log).toHaveBeenCalledWith("values", {
        name: "John Doe",
        phone: "(555) 555-5555",
        // Include other expected values based on your form structure
      });
    });
  });

  test("displays validation errors for invalid form data", async () => {
    render(<Reserving />);

    fireEvent.click(screen.getByText("Reserve Now!"));

    // Wait for asynchronous actions to complete (e.g., validation)
    await waitFor(() => {
      expect(
        screen.getByText("You must provide a name for the reservation")
      ).toBeInTheDocument();
      expect(
        screen.getByText("You must provide a phone number")
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "You must provide a date and a time to reserve a table."
        )
      ).toBeInTheDocument();
      expect(screen.getByText("Number of guests")).toBeInTheDocument();
      expect(screen.getByText("Tables")).toBeInTheDocument();
    });
  });
});
