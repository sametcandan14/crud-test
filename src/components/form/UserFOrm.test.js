import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

test("addUser fonksiyonu doğru parametreleri alır", async () => {
  const mock = jest.fn();
  render(<UserForm addUser={mock} />);

  const nameInput = screen.getByLabelText("İsim");
  const emailInput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("mehmet");

  user.type(emailInput, "mehmet123@gmail.com");

  user.click(submitBtn);

  expect(mock).toHaveBeenCalled();

  expect(mock).toHaveBeenCalledWith({
    name: "mehmet",
    email: "mehmet123@gmail.com",
  });
});
