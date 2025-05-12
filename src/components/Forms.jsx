import React from "react";

function Forms() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietData = formData.getAll("dietRes");
    const allData = {
        ...data,
        dietRes: dietData,
    }

    console.log(allData);
    // console.log(allData);
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
            <input
              type="radio"
              defaultChecked
              value="unemployed"
              name="empStatus"
            />
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
            <input
              type="checkbox"
              defaultChecked
              value="vegetarian"
              name="dietRes"
            />
            vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked
              value="gluten free"
              name="dietRes"
            />
            gluten free
          </label>
          <label>
            <input type="checkbox" value="kosher" name="dietRes" />
            kosher
          </label>
        </fieldset>

        <label htmlFor="favColor"> whats your fav color</label>
        <select id="favColor" name="favColor">
          <option disabled value="none">select a color</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Forms;
