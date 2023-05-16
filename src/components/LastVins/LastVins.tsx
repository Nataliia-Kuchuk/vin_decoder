import React from 'react';
import { useModel } from "../../context/mobx";
import { observer } from "mobx-react-lite";
import styles from './LastVins.module.scss';

const LastVins = () => {
     const store = useModel();
    return (
      <div className={styles.container_vins}>
        <h3>A list of the last decoded codes</h3>
        {store?.fiveLastVins.map((item) => {
          return (
            <ul>
              <li
                className={styles.list_item}
                onClick={() => store.getVinCode(item)}
              >
                {item}
              </li>
            </ul>
          );
        })}
      </div>
    );
};

export default observer(LastVins);