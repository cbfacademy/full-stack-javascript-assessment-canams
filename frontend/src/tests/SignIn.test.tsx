import { render, screen, waitFor } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import SignIn from "../components/signIn/SignIn"
import { vi } from "vitest"
import { BrowserRouter } from "react-router-dom"

const getTestRender = () => {
  render(
    <BrowserRouter>
      <SignIn open={true} setOpen={vi.fn()} />
    </BrowserRouter>
  )
}

describe("SignIn", () => {
  test("renders the component", () => {
    getTestRender()

    expect(
      screen.getByRole("presentation", { name: "Sign In" })
    ).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("Password")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument()
  })

  test("shows error if invalid email", () => {
    getTestRender()

    // password type does not have role so this is the only textbox
    const emailInput = screen.getByRole("textbox")
    const passwordInput = screen.getByLabelText("Password")
    const signInBtn = screen.getByRole("button", { name: /sign in/i })

    userEvent.type(emailInput, "q")
    userEvent.type(passwordInput, "q")
    userEvent.click(signInBtn)

    waitFor(() =>
      expect(
        screen.getByText(
          "The email provided is invalid, please check and try again."
        )
      ).toBeInTheDocument()
    )
  })
})

