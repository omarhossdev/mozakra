import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 320, margin: "4rem auto" }}>
      <h1>Login / Sign up</h1>

      <form action={login}>
        <h2>Login</h2>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <hr />

      <form action={signup}>
        <h2>Sign up</h2>
        <input name="username" placeholder="Username" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}