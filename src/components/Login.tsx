import "../css/forms.css"

export default function Login(): JSX.Element {
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="form-container">
        <label className="label">Email</label>
        <input className="linput"type="text" name="email" placeholder="Enter email"></input>
        <label className="label">Password</label>
        <input className="input" type="text" name="password" placeholder="Enter password"></input>
      </form>
    </div>
  );
}
