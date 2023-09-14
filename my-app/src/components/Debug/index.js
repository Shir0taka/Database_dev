import { Wrapper } from "./styles";
import styles from './styles.module.css'

const Debug = ({history}) => {
    return (
        <div className={styles.wrapper}>
            {history.map(el => (<span key={el}><b>path:</b> {el} → </span>))}
        </div>
    );
};

export default Debug;
