export function RemoveFoundPosts({
  closeFoundPostsContainer,
  foundPostsNum,
}) {

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '15px',
        position: 'absolute',
        top: '30px',
        width: '100%',
      }}
    >
      <span style={{ color: 'grey' }}>
        {!!foundPostsNum && foundPostsNum} 
        {!!foundPostsNum && foundPostsNum && ' post'} 
        {!!foundPostsNum && (foundPostsNum > 1 ? 's are ' : ' is ') }
        {!foundPostsNum && 'Not '}
        found
      </span>
      <span
        style={{
          color: '#f99191',
          fontSize: '20px',
          fontWeight: 900,
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        onClick={closeFoundPostsContainer}
      >
        ⨉
      </span>
    </div>
  );
}