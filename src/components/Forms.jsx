import React from "react";  

function Forms() {
    return (
        <section>
            <h1>Sign up form</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </form>
        </section>
    )
}

export default Forms;