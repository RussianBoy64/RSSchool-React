import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { IDeliveryCard, addDeliveryCard, setIsFormSubmited } from 'redux/reducers/formSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  DefaultInputValues,
  FormInputs,
  InputTypes,
  Inputs,
} from 'components/UI/FormInputs/FormInputs';
import FormCard from 'components/FormCard';

import styles from './styles.module.scss';

export default function Form() {
  const dispatch = useAppDispatch();
  const { isFormSubmited, deliveryCards } = useAppSelector((state) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cardData: IDeliveryCard = {
      name: data.name,
      date: data.date,
      packaging: data.package,
      pay: data.pay,
      photo: URL.createObjectURL(data.photo[0]),
      agreement: data.agreement,
    };

    reset(DefaultInputValues);
    dispatch(setIsFormSubmited(true));
    dispatch(addDeliveryCard(cardData));
  };

  useEffect(() => {
    const submitedTimer = setTimeout(() => {
      dispatch(setIsFormSubmited(false));
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
