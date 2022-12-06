import { useForm, SubmitHandler } from 'react-hook-form';

export const Form = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <select {...register('gender')}>
  //       <option value="female">female</option>
  //       <option value="male">male</option>
  //       <option value="other">other</option>
  //     </select>
  //     <input type="submit" />
  //   </form>
  // );
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm<IFormInputs>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  interface IFormInputs {
    firstName: string;
    lastName: string;
  }

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} />
      {errors.firstName && 'First name is required'}
      <input {...register('lastName', { required: true })} />
      {errors.lastName && 'Last name is required'}
      <input type="submit" />
    </form>
  );
};
