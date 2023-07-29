import React, { useState, useContext } from "react";

import { UploadButton } from "../UploadButton";

import { AppContext } from "../../contexts/AppContext";

import { HeaderWrapper } from "./styles";

export const Header = () => {
  const [file, setFile] = useState<File | null>(null);

  const { updateCsvFile } = useContext(AppContext);
  
  const handleFileUpload = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    event.preventDefault();
    
    if(file) {
      updateCsvFile(file);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement | null>): void => {
    if(event.target.files !== null) {
      setFile(event?.target?.files[0])
    }
  }

  return (
    <HeaderWrapper>
      <UploadButton handleOnSubmit={(e) => handleFileUpload(e)} text={"Upload"} handleOnChange={(e) => handleFileChange(e)}/>
    </HeaderWrapper>
  )
}