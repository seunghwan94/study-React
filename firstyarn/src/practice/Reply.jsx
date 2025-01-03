import React from 'react';

const styles ={
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection : "column",
    justifyContent: "conter",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight:"bold",
  },
  commentText: {
    color: "blue",
    fontSize: 16,
  }

}

const Reply = (props) => {
  const {wrapper, imageContainer, image, contentContainer, nameText, commentText } = styles;
  const {name, comment} = props;

  return (
    <div style={wrapper}>
      <div style={imageContainer}>
        <img src="https://placehold.co/60x60" style={image} alt={name}/>
      </div>
      <div style={contentContainer}>
        <span style={nameText}>{name}</span>
        <span style={{...commentText, color:"blue"}} >{comment}</span>
      </div>
    </div>
  );
}

export default Reply;
