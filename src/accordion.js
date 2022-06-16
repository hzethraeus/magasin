import React from "react";
import styles from "./stylesheet/accordion.module.css";
import SingleAcc from "./singleacc.js";
const Accordion = () => {
  return (
    <>
      <div className={styles.accordion}>
        {AccordionData.map((accObject) => {
          return (
            <div key={accObject.id}>
              <SingleAcc title={accObject.title} content={accObject.content} />
            </div>
          );
        })}
      </div>
    </>
  );
};
const AccordionData = [
  {
    id: 1,
    title: "Title 1",
    content: "Lorem Ipsum",
  },
  {
    id: 2,
    title: "Title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit lorem sit amet vehicula euismod.",
  },
  {
    id: 3,
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum nibh at tincidunt lobortis. Mauris vel ligula et massa tristique tincidunt at eget arcu. Nunc augue dolor, varius non mollis sed, porttitor non turpis.",
  },
];
export default Accordion;
