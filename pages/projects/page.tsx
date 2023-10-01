
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from './projects.module.css';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';

const projects = [
    "Reforestation of the Natural Park of the Muntanya de Montserrat",
    "ROS ROCA - EL BRUC Forest, absorption project in Barcelona",
    "Reforestation of the VALLE DE IRUELAS mountain in Ávila",
    "Forest La Atalaya in Madrid",
    "Torres Earth - MONTLLOBAT en Lleida",
    "CO2 absorption project in Alicante"
];

const projectSummaries: { [key: string]: string } = {
    "Reforestation of the Natural Park of the Muntanya de Montserrat": "Reforestation by planting Pinus halepensis, Pinus nigra and Quercus ilex in forest plots.",
    "ROS ROCA - EL BRUC Forest, absorption project in Barcelona": "Reforestation in burned area by planting Crataegus monogyna, Pinus pinea, Pinus halepensis.",
    "Reforestation of the VALLE DE IRUELAS mountain in Ávila": "Plantation of Pinus sylvestris,Pinus pinea, and Betula alba in burned forest land.",
    "Forest La Atalaya in Madrid": "Reforestation with Pinus nigra, Pinus pinea, Prunus amygdalus, Quercus faginea, and Quercus ilex in plots with agricultural use.",
    "Torres Earth - MONTLLOBAT en Lleida": "Reforestation with Pinus nigra salzmanii in plots with scrubland and wildlife refuge and biodiversity.",
    "CO2 absorption project in Alicante": "Reforestation by planting Quercus ilex ballota on forest land and contributing to the reestablishment of the forest."
};

const projectInfo: { [key: string]: { image: string, link: string } } = {
    "Reforestation of the Natural Park of the Muntanya de Montserrat": {
        image: "/images/p1.jpg",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2016-b004_tcm30-180498.pdf"
    },

    "ROS ROCA - EL BRUC Forest, absorption project in Barcelona": {
        image: "/images/p2.jpeg",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2021-b120_tcm30-537336.pdf"
    },

    "Reforestation of the VALLE DE IRUELAS mountain in Ávila": {
        image: "/images/p3.jpeg",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2021-b186_tcm30-549797.pdf"

    },
    "Forest La Atalaya in Madrid": {
        image: "/images/p4.jpeg",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2017-b006_tcm30-382427.pdf"

    },

    "Torres Earth - MONTLLOBAT en Lleida": {
        image: "/images/p5.png",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2015-b008_tcm30-180107.pdf"
    },

    "CO2 absorption project in Alicante": {
        image: "/images/p6.jpeg",
        link: "https://www.miteco.gob.es/content/dam/miteco/images/es/2016-b005_tcm30-180828.pdf"
    },
    // ... Otros proyectosx
};

const ProjectsPage = () => {


    const [newItem, setNewItem] = useState({ name: '', email: '', project: '' });

    const addItem = async (e: any) => {
        e.preventDefault();

        if (!newItem.name || !newItem.email || !newItem.project) {
            alert('Please complete all the fields');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "users"), {
                Name: newItem.name,
                Email: newItem.email,
                Project: newItem.project
            });

            console.log("Documento escrito con ID: ", docRef.id);
            alert("¡Datos guardados en Firestore con éxito!");

            // Restablecer el estado del formulario
            setNewItem({ name: '', email: '', project: '' });
        } catch (error) {
            console.error("Error al agregar el documento: ", error);
            alert("Ocurrió un error al guardar los datos en Firestore.");
        }
    };


    return (
        <MainLayout>
            <section></section>
            <div>
                <hr style={{ margin: '30px 0' }} />
                <div className={styles.pageContainer} style={{ marginLeft: '70px' }}>
                    <div className={styles.flexContainer}>
                        <div className={styles.formContainer}>
                            <h1> Future Projects Available</h1>
                            <br />
                            <p>These are a series of projects that we are working on in order to acquire <br /> licenses for the tokenization of their carbon assets.</p>
                            <form onSubmit={addItem} className={styles.form}>
                                <div className="mb-3">
                                    <br /><br />
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        style={{
                                            width: "200px",
                                        }}


                                        value={newItem.name}
                                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <br />
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={newItem.email}
                                        onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
                                        style={{
                                            width: "200px",
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="project" className="form-label">Select project</label>
                                    <br />
                                    <select
                                        className="form-control"
                                        id="project"
                                        style={{
                                            width: "200px",
                                        }}
                                        value={newItem.project}
                                        onChange={(e) => setNewItem({ ...newItem, project: e.target.value })}
                                    >
                                        <option value="">Select project</option>
                                        {projects.map((project) => (
                                            <option key={project} value={project}>
                                                {project}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className={`btn btn-primary ${styles.submitButton}`} type='submit'>Suscribe for free</button>
                                <br />
                                <p style={{ fontSize: 'smaller', color: 'gray' }}>You will receive a weekly newsletter with information about the selected project.</p>
                            </form>

                        </div>

                        <div className="col-md-7 ml-auto">
                            <div className="row">
                                {projects.map((project, index) => (
                                    <div key={project} className="col-md-4">
                                        <div
                                            className="card mt-3"
                                            style={{
                                                width: "100%",

                                            }}
                                        >
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title" style={{ marginBottom: "20px" }}>{project}</h5>
                                                <p className="card-text" style={{ marginBottom: "40px" }}>
                                                    {projectSummaries[project]}
                                                </p>
                                                {projectInfo[project] && (
                                                    <div className={styles.imageContainer}>
                                                        <Image
                                                            src={projectInfo[project].image}
                                                            alt={`Image for ${project}`}
                                                            width={230}
                                                            height={150}
                                                            style={{
                                                                borderRadius: "10px", // Ajusta este valor para cambiar el nivel de redondeo
                                                            }}
                                                        />
                                                        <br />
                                                        <br />
                                                        <a href={projectInfo[project].link} target="_blank" rel="noopener noreferrer">
                                                            Document reference
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>




                    </div>
                </div>

            </div>

        </MainLayout>
    );
};

export default ProjectsPage;
