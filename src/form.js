import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')

    return(
        <form>
            <label htmlFor="name">Name:</label><br/>
            <input 
                type="text" 
                id="name"   
                name="name"
                value = {name}
                onChange = {(e) => setName(e.target.value) }
                />
                <br/>
        </form>  
    
    
    )

}
export default Form 