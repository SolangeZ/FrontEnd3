import React, { useState } from "react"
import CardFrom from "./CardForm"


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    const [values, setValues] = useState({name:"", email:""});
    const [validate, setValidate] = useState(false);
    const [validation, setValidation] = useState(false);    

    const hadleSubmit = (e) => {

        e.preventDefaul();
        
        if (values.name.trim().length < 5 || values.email.length >= 6 ) {
            setValidation(true);
            setValidate(false);
        } else {
            setValidate(true);
            setValidation(false);
        }

    }

    return (
        <main>
            <form id="form" onSubmit={hadleSubmit}>
                
                <input 
                    type="text" 
                    name="name" 
                    value={values.name}
                    placeholder="Full name" 
                    onChange={(e) => setValues({...validate, name: e.target.value})}
                />
                <input 
                    type="text" 
                    name="email"
                    value={values.email} 
                    placeholder="Email" 
                    onChange={(e) => setValues({...validate, email: e.target.value})}
                />
                <button form="form" btn="submit" className="send">Send</button>
            </form>
                {validate 
                    && (
                        <p  className='message'>
                            Please verify your information again
                        </p>
                    )
                }
                {validation 
                    && (
                        <CardFrom name={values.name} mail={values.email} />
                    )
                }        
        </main>
    )
};

export default Form;
