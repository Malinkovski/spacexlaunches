"use client";
import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./commentwrite.module.scss";
import LearnButton from "../../atoms/learnbutton/LearnButton";

const { TextArea } = Input;

const CommentWrite: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-once="true"
      className={styles.comment}
    >
      <h4>Leave a comment:</h4>
      <TextArea className={styles.input} placeholder="Name..." autoSize />
      <div />
      <TextArea
        className={styles.input}
        placeholder="About you..."
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <div />
      <TextArea
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Comment here..."
        autoSize={{ minRows: 3, maxRows: 5 }}
      />

      <LearnButton
        title="Send comment"
        text="Send"
        className={styles.button}
      ></LearnButton>
    </div>
  );
};

export default CommentWrite;
