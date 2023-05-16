import { useEffect } from 'react';
import { useModel } from "../../context/mobx";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useNavigate } from 'react-router-dom';
import styles from './VariablesList.module.scss'

const VariablesList = () => {
    const store = useModel();
    useEffect(() => {
    store?.getVariablesList()
}, [])
    console.log(toJS(store?.variablesList));
    const navigate = useNavigate()
 
    return (
      <div className={styles.container}>
        <h2 >List of all variables with descriptions</h2>
        {store?.variablesList?.map((item) => (
          <div
           className={styles.container_item}
            onClick={() => navigate(`/variables/${item.ID}`)}
          >
            <h2 >{item.Name}</h2>
            <h3>{item.GroupName}</h3>
            <p dangerouslySetInnerHTML={{ __html: `${item.Description}` }}></p>
          </div>
        ))}
      </div>
    );
};

export default observer(VariablesList);