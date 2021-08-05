import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; //Libería de React para la creación y validación de formularios
import axios from 'axios'; // solicitudes http a una API
import Card from '../../_Reusable/Card/Card';


import './form.scss';


export default function Form() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [repos, setRepos] = useState([]);

    const onSubmit = async (data, e) => {
        console.log(data)

        //vaciar el campo
        e.target.reset();

        const baseurl = `https://api.github.com/users/${data.search}/repos`;

        const response = await axios.get([baseurl]);
        // almacenamos los datos en el State
        setRepos(response.data)
        if (!data) {
           alert('algo no va bien')
        }else {setRepos(response.data)}
        console.log(response.data)

    }

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="formbtn-msg">
                        <div className="formdiv">
                            <input
                                type="text"
                                name="search"
                                className="formdiv-input"
                                autoFocus
                                placeholder="GitHub User"
                                {...register("search", { required: true })} />
                        </div>
                        <div className="error">
                            {errors.search?.type === 'required' && "You must enter your GitHub user"}

                        </div>
                    </div>

                    <div className="formbtn">
                        <input className="formbtn-btn" type="submit" value="Search" />

                    </div>

                </form>


            </div>
            <div className="card-container">

                {repos.map((item) => (

                    <Card apidata={item} />

                ))

                }
            </div>
        </>

    );
}
