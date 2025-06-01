const Frame = ({ children, styleContent, styleFrame }) => {
  return (
    <section
      className={`frame ${styleFrame}`}
    >
      <div className="frame-header">
        <div className="frame-header-circle"></div>
        <div className="frame-header-circle"></div>
        <div className="frame-header-circle"></div>
      </div>
      <div className={`frame-content ${styleContent}`}>{children}</div>
    </section>
  );
};
export default Frame;
