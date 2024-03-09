import { render, screen, waitFor } from "@testing-library/react";
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

test("form gönderildikten sonra inputların temizlenmesi gerekir.", async () => {
  render(<UserForm addUser={() => {}} />);

  const nameInp = screen.getByLabelText("İsim");
  const emailInp = screen.getByLabelText("Email");
  const btn = screen.getByRole("button");

  user.type(nameInp, "ali");
  user.type(emailInp, "alig@mail.com");

  expect(nameInp).toHaveValue("ali");
  expect(emailInp).toHaveValue("alig@mail.com");

  user.click(btn);

  await waitFor(() => expect(nameInp).toHaveValue(""));
  await waitFor(() => expect(emailInp.value).toBe(""));
});
