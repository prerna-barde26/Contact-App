import React, {useState} from 'react'
import "./Home.css"
import ContactCard from '../../components/ContactCard/ContactCard';



function Home() {
     const [contacts, setContact] =useState([
        {
            name:'Prerna',
            mobile:'6574832967',
            email:'prerna45@gmail.com'
        },
       
     ]);

   
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [mobile, setMobile] = useState('');
   
    const addContact = () => {
            const obj = {
                name:name,
                email:email,
                mobile:mobile,
            }

            const tempArray = contacts;
            tempArray.push(obj);
            
            setContact(tempArray);
    };
   
     return (
        <div>
            <h1 className='app-title'>Contact App</h1>


            <div className='app-body'>
              <div className='contacts-container'>
                  <h2 className='sub-heading'> Show Contacts</h2>
                  {
                    contacts.map((contact,index)=>{
                        return  (<ContactCard 
                            key={index} 
                            name={contact.name} 
                            email={contact.email} 
                            mobile={contact.mobile}/>)
                           
                        
                    })
                  }
               </div>

               <div className='add-contacts-container'>
                    <h2 className='sub-heading'>Add Contacts</h2>
                    <form>
                        {name}
                        <input 
                        type='text' 
                        placeholder='Name'
                         className='user-input'
                         onChange={(e)=>{
                           setName(e.target.value)
                         }}
                         value={name}
                         />


                        {email}
                        <input 
                        type='email' 
                        placeholder='Email' 
                        className='user-input'
                        onChange={(e)=>{
                            setEmail(e.target.value)
                          }}
                          value={email}
                        />


                         {mobile}
                        <input
                         type='text' 
                         placeholder='Mobile' 
                         className='user-input' 
                         onChange={(e)=>{
                            setMobile(e.target.value)
                          }}
                          value={mobile}/>

                        <button 
                        type='button'
                         className='btn-add-contact' 
                         onClick={addContact}
                         >Add Contact</button>
                    </form>
                </div>


            </div>
        </div>

    )
}

export default Home