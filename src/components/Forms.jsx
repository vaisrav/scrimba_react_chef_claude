import React from "react";  

function Forms() {

    function signUp(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email, password);
    }

    return (
        <section>
            <h1>Sign up form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <br/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <br/>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Forms;