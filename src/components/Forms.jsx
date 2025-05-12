import React from "react";

function Forms() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const empStatus = formData.get("empStatus");
    const dietRes = formData.getAll("dietRes");
    
    console.log(email, password, empStatus, dietRes);
  }

  return (
    <section>
      <h1>Sign up form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          defaultValue="john@doe.com"
          type="email"
          name="email"
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="pass"
          defaultValue="john@doe.com"
          type="password"
          name="password"
        />
        <br />

        <label htmlFor="desc">Description</label>
        <textarea id="desc" name="desc" defaultValue="basic desc"></textarea>

        <fieldset>
            <legend>Employee Status</legend>
          <label>
            <input type="radio" defaultChecked value="unemployed" name="empStatus" />
            unemployed
          </label>
          <label>
            <input type="radio" value="part-time employed" name="empStatus" />
            part-time
          </label>
          <label>
            <input type="radio" value="full-time employed" name="empStatus" />
            full-time
          </label>
        </fieldset>

        <fieldset>
            <legend>Dietery Restrictions</legend>
          <label>
            <input type="checkbox" defaultChecked value="vegetarian" name="dietRes" />
            vegetarian
          </label>
          <label>
            <input type="checkbox" defaultChecked value="gluten free" name="dietRes" />
            gluten free
          </label>
          <label>
            <input type="checkbox" value="kosher" name="dietRes" />
            kosher
          </label>
        </fieldset>


        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Forms;
