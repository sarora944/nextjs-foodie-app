"use client";
import { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputImage = useRef(null);
  const [pickedImage, setPickedImage] = useState(null);

  const handleImageClick = () => {
    inputImage.current.click();
  };

  const handlePickedImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPickedImage(reader.result); //
    };
  };
  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && <Image src={pickedImage} fill alt="Image picked by user"/>}
        </div>
        <input
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImage}
          onChange={handlePickedImage}
          required
        />
        <button
          type="button"
          className={style.button}
          onClick={handleImageClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
