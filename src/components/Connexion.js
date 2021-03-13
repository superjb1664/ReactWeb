import React from "react"

import Header from "./Header"
class Connexion extends React.Component {


    state = {
        title: "",
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };


    render() {
        return (
            <div className="container">
                <Header/>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <h3>Connexion</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Identifiant</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Votre identifiant : mail"
                                        name="identifiant"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Mot de passe</td>
                                <td>
                                    <input
                                        type="password"
                                        placeholder="Votre mot de passe"
                                        name="identifiant"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="input-submit">Me connecter</button>
                </form>
            </div>

        )
    }
}
export default Connexion