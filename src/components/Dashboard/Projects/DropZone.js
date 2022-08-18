import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: var(--fonts-md);
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
}`;

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16;
}`;

const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-top: 10px;
  width: 172px;
  height: 98px;
  padding: 4;
  box-sizing: border-box;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
}
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
}`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
}`;

const ExistingImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;

const ExistingImage = styled.img`
  width: 172px;
  height: 98px;
  transition: all 0.3s;
  transition-delay: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(2);
  }
`;

const DropZone = ({ formIsValid, files, setFiles, existingImages }) => {
  const [showExistingImages, setShowExistingImages] = useState(true);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setShowExistingImages(false);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Image
          src={file.preview}
          alt={file.name}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </ThumbInner>
    </Thumb>
  ));

  return (
    <section className="container">
      {showExistingImages && (
        <ExistingImageContainer>
          {existingImages.map((img, i) => (
            <ExistingImage src={img} alt={`image_${i}`} key={img} />
          ))}
        </ExistingImageContainer>
      )}
      <DropzoneContainer {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Drag 'n' drop some images here, or click to select files and replace
          existing ones.
        </p>
      </DropzoneContainer>
      <ThumbsContainer>{thumbs}</ThumbsContainer>

      <br />
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <button className="login-button" disabled={!formIsValid} type="submit">
          SAVE &rarr;
        </button>
      </Grid>
      <br />
    </section>
  );
};

export default DropZone;
