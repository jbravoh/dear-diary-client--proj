export default function SignupForm(): JSX.Element {
  return (
    <div className="form-container">
      <h1>Signup</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter username"></input>
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter email"></input>
        <label>Password</label>
        <input type="text" name="password" placeholder="Enter password"></input>
      </form>
    </div>
  );
}
