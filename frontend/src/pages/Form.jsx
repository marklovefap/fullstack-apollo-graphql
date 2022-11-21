import { useState } from 'react';
import "./Form.css";
import FormInput from '../components/FormInput';
import { gql, useMutation } from "@apollo/client";


const REGISTER = gql`

mutation AddRe($username: String!, $email: String!, $birthday: String, $password: String!, $confirmPassword: String!)
{
  addRe(username: $username, 
    email: $email,
    birthday : $birthday, 
    password: $password, 
    confirmPassword: $confirmPassword) {
    id
    username
    birthday
    password
    confirmPassword
  }
}

`;

function Form() {
  
  

  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  });

  const [addRe, { data, loading, error }] = useMutation(REGISTER, {
    variables: {
      username: values.username,
      email: values.email,
      birthday: values.birthday,
      password: values.password,
      confirmPassword: values.confirmPassword, 
    }
  });
  
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password don't match",
      label:"Confirm Password",
      pattern:values.password,
      require:true
    }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  
  console.log(values);
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]}  
          onChange={onChange} 
          />
        ))}
        <button onClick={() => addRe()}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
