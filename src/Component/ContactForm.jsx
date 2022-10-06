import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    max-width: 500px;
    flex-direction: column;
    margin: 15% auto;
    input{
        padding: .5rem;
    }
    textarea{
        padding: .5rem;
    }
`
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="navn" {...register("name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea placeholder='skriv her ...' rows={10} {...register("Messenge", {required: true})} />

      <input type="submit" />
    </Form>
  );
}