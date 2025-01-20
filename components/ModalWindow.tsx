function ModalWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-[100vh] w-[100vw]">
      <div className=" fixed top-0 overflow-hidden h-[100vh] w-[100vw] backdrop-blur-md bg-gray-500/30"></div>
      <div className="fixed top-[50%] z-[999] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto">
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
