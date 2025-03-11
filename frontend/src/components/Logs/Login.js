import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [formData, setFormData] = useState({ userName: '', password: '' });
    const [responseStatus, setResponseStatus] = useState(null);
    const [showPassword, setShowPassword] = useState(false); // Gestion de la visibilité du mot de passe
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                console.log('Connexion réussie !');
                setResponseStatus('Connexion réussie !');

                const data = await response.json();
                localStorage.setItem('userId', data.userId); // stockage du userId dans localStorage
                localStorage.setItem('token', data.token); // stockage du token dans localStorage

                navigate('/characters/' + data.userId); // navigation vers la page des personnages après la connexion.
            } else if (response.status === 401) {
                setResponseStatus('Erreur d\'authentification : nom d\'utilisateur ou mot de passe incorrect.');
            } else {
                setResponseStatus('Erreur inconnue.');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite : ', error);
            setResponseStatus('Une erreur s\'est produite : ' + error.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-box">
            <form name="formLogin" method="post" onSubmit={handleSubmit}>
                <div className="form-line">
                    <label htmlFor="userName">Utilisateur</label>
                    <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleInputChange} />
                </div>
                <div className="form-line">
                    <label htmlFor="password">Mot de passe</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={formData.password} onChange={handleInputChange} />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Masquer' : 'Afficher'}
                    </button>
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <p id="response-status" className={responseStatus === 'Connexion réussie !' ? 'success-message' : ''}>{responseStatus}</p>
        </div>
    );
}