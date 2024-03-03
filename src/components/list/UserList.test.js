import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
  { name: "Samet", email: "c._samet@hotmail.com" },
  { name: "Hüseyin", email: "huseyin38@gmail.com" },
  { name: "Mehmet", email: "mehmet1234@gmail.com" },
];

test("her kullanıcı için ekrana bir tablo satırı basma", () => {
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //   expect(rows).toHaveLength(users.length);

  expect(rows.length == users.length);
});

test("her bir kullanıcı için isim ve email değeri ekranda gözükür", () => {
  render(<UserList users={users} />);

  for (const user of users) {
    const nameCell = screen.getByText(user.name);

    const mailCell = screen.getByText(user.email);

    expect(nameCell).toBeInTheDocument();
    expect(mailCell).toBeInTheDocument();
  }
});
