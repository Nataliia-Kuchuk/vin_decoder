import { useEffect } from "react";
import { toJS } from "mobx";
import { useModel } from "../../context/mobx";
import { observer } from "mobx-react-lite";
import styles from './ListDecoder.module.scss';


const ListDecoder = () => {
  const store = useModel();
  return (
    <div className={styles.container_description}>
      <h2>List of decription results</h2>
      {store?.vinInfo
        ?.filter((item) => item.Value)
        .map((item) => (
          <div>
            <table className={styles.table}>
              <tr>
                <td className={styles.variable}> {item.Variable}</td>
                <td className={styles.value}>{item.Value}</td>
              </tr>
            </table>
          </div>
        ))}
    </div>
  );
};

export default observer(ListDecoder);
