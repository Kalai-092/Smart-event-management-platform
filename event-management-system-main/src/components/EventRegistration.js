function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();   // page reload aagakoodaadhu
    alert("Registration Successful!");
  };

  return (
    <div className="box">
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" required />
        <input type="text" placeholder="Department" required />
        <input type="text" placeholder="Event Name" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
