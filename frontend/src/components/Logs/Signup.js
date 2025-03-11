import React, { useState } from 'react';
import './Login.css';

export default function Signup() {
    const [formData, setFormData] = useState({ userName: 'Bolvar', password: 'FuckBolvar' });
    const [error, setError] = useState(null); // État pour stocker l'erreur

    const handleSubmit = (event) => {
        event.preventDefault();
        // Effectuer l'appel fetch pour l'inscription
        fetch('http://localhost:4000/api/auth/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 201) {
                console.log('Inscription réussie !');
            } else {
                setError('Erreur lors de l\'inscription.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });
        console.log(formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="login-box">
            <form name="formLogin" method="post" onSubmit={handleSubmit}>
                <div className="form-line">
                    <label htmlFor="userName">Utilisateur</label>
                    <input type="userName" name="userName" id="userName" value={formData.userName} onChange={handleInputChange} />
                </div>
                <div className="form-line">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p id="error-message">{error}</p>
        </div>
    );
}