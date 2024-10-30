import { login, logout } from "../actions";
import { getSession } from "../lib/auth";

export default async function Login() {
  const session = await getSession();

  return (
    <>
      <section className="container my-9">
        <form action={login}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </section>
    </>
  );
}
