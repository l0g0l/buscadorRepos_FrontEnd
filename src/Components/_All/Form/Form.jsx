import React from 'react';
import { useForm } from 'react-hook-form'; //Libería de React para la creación y validación de formularios
import axios from 'axios'; // solicitudes http a una API
import Card from '../../_Reusable/Card/Card';


import './form.scss';


export default function Form(props) {
    console.log(props)
    // he movido el estado del Form para dárselo al home, que es el padre. Por lo tanto form recibe por props el estado para que Form pueda almacenar toda la info y ser utilizada porteriormente por Home
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data, e) => {
        console.log(data)

        //vaciar el campo
        e.target.reset();
        
        const baseurl = `https://api.github.com/users/${data.search}/repos`;
        
            await axios.get([baseurl])
            .then(response => {
                if (response.data) {
                  props.setrepos(response.data)
                  props.setfind(true)
                }
              })
              // aqui pongo el setFind porque si no encuentra usuario genera un error que nos muestra el catch y es aquí donde cambiamos el state a false para que pinte el mensaje
              .catch(error => {
                props.setfind(false)
              })    
    } 
    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="formbtn-msg">
                        <div className="formdiv">
                            <input
                                type="text"
                                id="search"
                                className="formdiv-input"
                                placeholder="GitHub User"
                                title="Search"
                                {...register("search", { required: true })} />
                        </div>
                        <div className="error" role="alert">
                            {errors.search?.type === 'required' && "You must enter your GitHub user"}

                        </div>
                        
                    </div>

                    <div className="formbtn">
                        <button className="formbtn-btn" type="submit"><span>Search</span></button>

                    </div>
                </form>
            </div>

            <div className="card-container">
                {props.repos.map((item, i) => (
                    //recibe por props el estado para almacenar toda la info y utilizarla en el componente Home
                    <Card apidata={item} key={i} />

                ))

                }
            </div>
        </>

    );
}
