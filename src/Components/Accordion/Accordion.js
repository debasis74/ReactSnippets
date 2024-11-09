import styles from "./Accordion.module.css";
import { useState } from "react";
const data = [
  {
    Heading: "Accordion 1",
    Data: "Data to be shown here in 1",
    Key: 1,
  },
  {
    Heading: "Accordion 2",
    Data: "Data to be shown here in 2",
    Key: 2,
  },
  {
    Heading: "Accordion 3",
    Data: "Data to be shown here in 3",
    Key: 3,
  },
];

const SubAccordions = ({ data, isOpen, handleAccordionClick }) => {
  const { Heading, Data, Key } = data;
  return (
    <div
      key={Key}
      className={styles.subAccordionDiv}
      onClick={() => handleAccordionClick(Key)}
    >
      <div className={styles.firstDiv}>
        {Heading}
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div className={styles.secondDiv}>{isOpen ? Data : null}</div>
    </div>
  );
};

const Accordion = () => {
  const [indexOfClickedAccordion, setIndexOfClickedAccordion] = useState(0);

  const onAccordionClick = (key) => {
    const newKey = indexOfClickedAccordion === key ? 0 : key;
    setIndexOfClickedAccordion(newKey);
  };

  return (
    <div className={styles.container}>
      {data.map((acc) => (
        <SubAccordions
          key={acc.Key}
          data={acc}
          isOpen={indexOfClickedAccordion === acc.Key}
          handleAccordionClick={onAccordionClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
