import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("uygulama doğru şekilde çalışıyor mu", async () => {
  render(<App />);

  const nameInp = screen.getByLabelText("İsim");
  const emailInp = screen.getByLabelText("Email");
  const btn = screen.getByRole("button");

  user.type(nameInp, "mehmet");
  user.type(emailInp, "mehmet123@mail.com");

  user.click(btn);

  await screen.findByRole("cell", { name: "mehmet" });
  await screen.findByRole("cell", { name: "mehmet123@mail.com" });
});
