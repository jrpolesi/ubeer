import { Box, Button, Form, Header, Heading, Main, TextInput } from "grommet";
import { FormPrevious, MailOption, User, Hide } from "grommet-icons";
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom"


interface submit {
    name: string
    email: string
    password: string
}

const Signup = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo Obrigatório'),
        email_confirm: yup.string().oneOf([yup.ref('email'), 'Email diferente']).required('Campo obrigatório'),
        password: yup.string().min(8, 'mínimo 8 digitos').required('Campo obrigatório'),
        password_confirm: yup.string().oneOf([yup.ref('password'), 'Senhas diferentes']).required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    //const navigate = useNavigate()

    // const submit = ({name, email, sting}) => {
    //     const user = {name, email, password}}
    // //     api.post("/user", user)
    // //    .then((response) => {
    // //         //navigate('/login')
    // //    })
    // //    .catch((err) => {

    // //    })
    // }
    
    // if(authenticated) {
    //     return <Redirect to='/dashboard'/>
    // }

  return (
    <Box>
      <Header background="light-2" height="120px">
        <Button color={"#4B545A"} icon={<FormPrevious />} />
      </Header>
      <Main flex direction="column" align="center">
        <Heading level="1">Cadastro</Heading>
        <Box width={"300px"} height={"500px"} >

          <Form errors >
              <Box flex direction="column" gap="small" align="center" justify="around">
                <TextInput aria-errormessage={errors.name?.message} placeholder="Nome completo" name="name" textAlign="start" icon={<User/>} />
                <TextInput placeholder="Email" type="email" icon={<MailOption />} />
                <TextInput placeholder="Confirmar email" type="email" icon={<MailOption />} />
                <TextInput placeholder="Senha" type="password" icon={<Hide/>} />
                <TextInput placeholder="Confirmar senha" type="password"icon={<Hide/>} />
                <Button color="accent-4" primary label="Próximo" size="large"/>
              </Box>
          </Form>
        </Box>
      </Main>
    </Box>
  )
}

export default Signup;
