import React from "react"

import Header from "./Header"


const Connexion = props => {






    const handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };


        return (
            <div className="container">
                <form onSubmit={handleSubmit} className="form-container">
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
export default Connexion