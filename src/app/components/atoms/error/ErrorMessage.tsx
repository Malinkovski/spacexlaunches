import React from "react";
import styles from "./error.module.scss";
import { ErrorMessageProps } from "@/utilities/types";

const ErrorMessage = ({ errorMessage, errorName }: ErrorMessageProps) => {
  return (
    <div className={styles.errorMessage}>
      {errorName}: {errorMessage}
    </div>
  );
};

export default ErrorMessage;
