import React from "react";
import { UploadWrapper } from "./styles";

type UploadButtonProps = {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
}

export const UploadButton = ({ handleOnChange, handleOnSubmit, text }: UploadButtonProps) => {
  return (
    <>
      <UploadWrapper>
        <label htmlFor="csvFileUpload"></label>
        <input type="file" id="csvFileInput" accept=".csv" onChange={handleOnChange} />
        <button onClick={(e) => handleOnSubmit(e)}>{text}</button>
      </UploadWrapper>
    </>
  )
}