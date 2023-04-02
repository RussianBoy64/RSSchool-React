import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  DefaultInputValues,
  FormInputs,
  InputTypes,
  Inputs,
} from 'components/UI/FormInputs/FormInputs';
import FormCard from 'components/FormCard';

import styles from './styles.module.scss';

export interface ICard {
  name: string;
  date: string;
  packaging: string;
  pay: string;
  photo: string;
  agreement: string;
}

export default function Form() {
  const [deliveryCards, setDelivaryCards] = useState<ICard[]>([]);
  const [isFormSubmited, setIsFormSubmited] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cardData: ICard = {
      name: data.name,
      date: data.date,
      packaging: data.package,
      pay: data.pay,
      photo: URL.createObjectURL(data.photo[0]),
      agreement: data.agreement,
    };

    reset(DefaultInputValues);
    setIsFormSubmited(true);
    setDelivaryCards([...deliveryCards, cardData]);
  };

  useEffect(() => {
    const submitedTimer = setTimeout(() => {
      setIsFormSubmited(false);
    }, 1000);

    return () => {
      clearTimeout(submitedTimer);
    };
  }, [isFormSubmited]);

  return (
    <main className={styles.main}>
      <h2 className={styles.pageTitle}>Delivery form</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {FormInputs.map((inputData, index) => {
          const { InputComponent, name } = inputData;

          return <InputComponent key={index} name={name} register={register} error={errors} />;
        })}
        <button type="submit">Submit</button>
        {isFormSubmited && <span className={styles.form__submitted}>Form submitted!</span>}
      </form>
      <div className={styles.cardsWrapper}>
        {deliveryCards.length > 0 &&
          deliveryCards.map((card) => {
            return <FormCard {...card} key={card[InputTypes.name]} />;
          })}
      </div>
    </main>
  );
}
