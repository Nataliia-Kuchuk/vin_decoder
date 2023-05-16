import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModel } from "../../context/mobx";
import { FormValues } from "../../types/vinCode";
import { observer } from "mobx-react-lite";
import styles from './VinInput.module.scss';
import car from '../../assets/iconcar.png';
const VinInput = () => {
  const store = useModel();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },

  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data.vin);
    store?.getVinCode(data?.vin);
      store?.getLastVins(data?.vin);
      
  };

  return (
    <div className={styles.input_container}>
      <h2>
        VIN decoder: find and check any VIN code
        <img
          className={styles.icon}
          src={car}
          alt=""
          width={35}
          height={35}
        />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={styles.input}
            placeholder="enter vin..."
            value={store?.vinValue}
            id="text"
            {...register("vin", {
              onChange: (e) => {
                store?.getVinValue(e.target.value);
              },
              required: true,

              pattern: {
                value: /^[A-HJ-NPR-Z0-9]{17}$/,
                message: "invalid vin code",
              },
            })}
          />
          {!isValid && store?.vinValue !== "" ? (
            <div className={styles.message}>vincode is invalid</div>
          ) : null}
        </div>

        <button className={styles.btn} disabled={!isValid}>
          {" "}
          Decode VIN
        </button>
      </form>
    </div>
  );
};

export default observer(VinInput);
