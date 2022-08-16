import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const DropzoneContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  width: 125px;
  height: 100px;
  padding: 4;
  box-sizing: border-box;
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

const DropZone = ({ formIsValid, files, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

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

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <DropzoneContainer {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
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
