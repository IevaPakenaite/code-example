import { useState } from "react";
import { ResponseSource } from "../../../../models/ResponseModel";
import Button from "../../../../components/Button/Button";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./ResponseSource.module.scss";

interface Props {
  item: ResponseSource;
}

function ResponseSourceItem({ item }: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  function formatDate(timeString: string) {
    const date = new Date(timeString);
    return date.toLocaleDateString("lt");
  }

  return (
    <div className={styles.item}>
      <Button
        label={item.fileName}
        secondary
        icon={expanded ? faChevronUp : faChevronDown}
        onClick={toggleExpansion}
      />
      {expanded && (
        <div>
          <p>Created: {formatDate(item.createdDate)}</p>
          <p>Edited: {formatDate(item.modifiedDate)}</p>
          <p>Score: {item.score}</p>
          <p>{item.text}</p>
        </div>
      )}
    </div>
  );
}

export default ResponseSourceItem;
