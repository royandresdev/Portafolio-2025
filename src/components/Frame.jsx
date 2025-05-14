const Frame = ({ children, styleContent, styleFrame }) => {
  return (
    <div className={`border-2 border-primary-400 rounded overflow-hidden w-fit flex flex-col ${styleFrame}`}>
      <div className="bg-primary-400 flex p-2 gap-1">
        <div className="size-2.5 rounded-full bg-primary-base"></div>
        <div className="size-2.5 rounded-full bg-primary-base"></div>
        <div className="size-2.5 rounded-full bg-primary-base"></div>
      </div>
      <div className={styleContent}>
        {children}
      </div>
    </div>
  )
}
export default Frame
