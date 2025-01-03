const ComponentExtractingImg = function(props){
  const {avatarUrl, name} = props.author;
  return <img className="avatar"
            src={avatarUrl}
            alt={name}
          />;
}

export default ComponentExtractingImg