const Frame = ({ children }) => {
  return (
    <div className="border-2 border-primary-400 rounded overflow-hidden">
      <div className="bg-primary-400 flex p-2 gap-1">
        <div className="size-2.5 rounded-full bg-primary-base"></div>
        <div className="size-2.5 rounded-full bg-primary-base"></div>
        <div className="size-2.5 rounded-full bg-primary-base"></div>
      </div>
      {children}
    </div>
  )
}
export default Frame
