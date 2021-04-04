import React from 'react';

class Signup extends React.Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
            <div>
                <input type="text" name="create-username" placeholder="Create a Username" />
                <label htmlFor="create-username">Create a Username</label>
            </div>
            <div>
                <input type="password" name="create-password" placeholder="Create a Password" />
                <label htmlFor="create-password">Create a Password</label>
            </div>
                <input type="submit" value="Create Account" />
                </form>
        )
    }
}

export default Signup; 