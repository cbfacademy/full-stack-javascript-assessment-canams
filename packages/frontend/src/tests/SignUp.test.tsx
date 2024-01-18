import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import SignUp from "../components/SignUp"
import { vi } from "vitest"
import { BrowserRouter } from "react-router-dom"

const getTestRender = () => {
  render(
    <BrowserRouter>
      <SignUp open={true} setOpen={vi.fn()} />
    </BrowserRouter>
  )
}

describe("SignUp", () => {
  test("renders the component", () => {
    getTestRender()

    expect(
      screen.getByRole("presentation", { name: "Sign Up" })
    ).toBeInTheDocument()
    expect(screen.getByText("Full Name")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Password")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument()
  })

  test("shows error if invalid email", () => {
    getTestRender()

    // password type does not have role so this is the only textbox
    const nameInput = screen.getAllByRole("textbox")[0]
    const emailInput = screen.getAllByRole("textbox")[1]
    const passwordInput = screen.getByLabelText("Password")
    const signUpBtn = screen.getByRole("button", { name: /sign up/i })

    userEvent.type(nameInput, "q")
    userEvent.type(emailInput, "q")
    userEvent.type(passwordInput, "q")
    userEvent.click(signUpBtn)

    waitFor(() =>
      expect(
        screen.getByText(
          "The email provided is invalid, please check and try again."
        )
      ).toBeInTheDocument()
    )
  })
})

