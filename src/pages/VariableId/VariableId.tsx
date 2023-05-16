import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useModel } from "../../context/mobx";
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';
import styles from './VariableId.module.scss';

const VariableId = () => {
  const store = useModel();
  const { id } = useParams();

  useEffect(() => {
    store?.getVariableId(id || '');
  }, [id]);

  console.log(toJS(store?.variableId));

  return (
    <div className={styles.container}>
      <div>
        <Link to={"/variables"} className={styles.link_navigation}>Go to variables</Link>
      </div>
      {store?.variableId?.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Element name</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {store?.variableId?.map((item) => (
              <tr key={item.Id}>
                <td className={styles.elementname}>{item.ElementName}</td>
                <td className={styles.name}>{item.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.text}>No information available</div>
      )}
    </div>
  );
};

export default observer(VariableId);
