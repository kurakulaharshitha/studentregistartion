
import React, { useState } from "react";

function StudentForm() {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!roll || !name || !email || !branch || !mobile) {
      alert("Please fill all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter a 10-digit mobile number");
      return;
    }

    setStudents([...students, { roll, name, email, branch, mobile }]);

    setRoll("");
    setName("");
    setEmail("");
    setBranch("");
    setMobile("");
  }

  return (
    <div>
      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Roll Number" value={roll}
          onChange={e => setRoll(e.target.value)} /><br /><br />

        <input placeholder="Name" value={name}
          onChange={e => setName(e.target.value)} /><br /><br />

        <input placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} /><br /><br />

        <input placeholder="Branch" value={branch}
          onChange={e => setBranch(e.target.value)} /><br /><br />

        <input placeholder="Mobile Number" value={mobile}
          onChange={e => setMobile(e.target.value)} /><br /><br />

        <button type="submit">Register</button>
      </form>

      <h2>Student Details</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.roll}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.branch}</td>
              <td>{s.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentForm;
