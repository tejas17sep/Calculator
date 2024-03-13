import styles from "./Buttonscontainor.module.css";
const Buttoncontainor = ({onButtonClick}) => {

    const buttonName = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
  <div className={styles.buttonscontainer}>

    {buttonName.map(buttonName  =>(<button className={styles.button} onClick={()=>onButtonClick(buttonName)} >{buttonName}</button>))}

  </div>);
};

export default Buttoncontainor;
