import React from "react";
import styles from "./error.module.scss";

interface ErrorMessageProps {
  errorName: string;
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage, errorName }: ErrorMessageProps) => {
  return (
    <div className={styles.errorMessage}>
      {errorName}: {errorMessage}
    </div>
  );
};

export default ErrorMessage;
