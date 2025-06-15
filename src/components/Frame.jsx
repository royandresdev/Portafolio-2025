const Frame = ({ children, styleContent, styleFrame }) => {
  return (
    <article
      className={`frame ${styleFrame}`}
    >
      <div className="frame-header">
        <div className="frame-header-circle"></div>
        <div className="frame-header-circle"></div>
        <div className="frame-header-circle"></div>
      </div>
      <div className={`frame-content ${styleContent}`}>{children}</div>
    </article>
  );
};
export default Frame;
