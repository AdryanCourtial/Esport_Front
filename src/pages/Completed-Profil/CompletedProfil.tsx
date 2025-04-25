import React, { useEffect, useState } from 'react'
import './CompletedProfil.css'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { Sector } from '../../interfaces/sectors';
import { FetchSectors } from '../../api/sectors';
import { FetchAuthentification } from '../../api/authentification';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const CompletedProfil: React.FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        FetchSectors.getSectors().then((value) => {
            console.log(value)
            setSectors(value)
        })
    }, [])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        sector: '',
      });

    const [sectors, setSectors] = useState<Sector[]>([])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        FetchAuthentification.ConfirmProfil(formData).then(() => {
            navigate("/home")
        })
    };



    return (
        <MainLayout>
            <>
            <form id="profile-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">Prénom :</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="lastName">Nom :</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="email">Adresse mail :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="sector">Secteur :</label>
                <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Sélectionner un secteur --</option>
                    {sectors.map((sector, index) => (
                    <option key={index} value={sector.Name}>{sector.Name}</option>
                    ))}
                </select>
                <br />

                <button type="submit">Soumettre</button>
                </form>
            </>
        </MainLayout>
    )
}

export default CompletedProfil