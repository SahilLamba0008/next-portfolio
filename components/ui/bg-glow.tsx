const BgGlow = () => {
  return (
    <>
      <div
        className="fixed -top-20 max-md:top-0 max-sm:top-10 -right-40 max-sm:right-36 max-md:right-20 max-lg:right-10 bg-gradient-to-b from-indigo-700 to-indigo-900
        h-[40vh] w-[50vw] blur-[100px] md:blur-[200px] -mt-20 -mr-80 opacity-65"
      ></div>
      <div
        className="fixed -bottom-40 -left-40 max-lg:-bottom-20 max-md:-bottom-10 max-sm:-bottom-0 max-lg:-left-20 max-md:-left-40 bg-gradient-to-bl from-indigo-300 to-indigo-700
        h-[20vh] w-[50vw] blur-[100px] md:blur-[200px] opacity-65 -mb-40 -ml-10"
      ></div>
    </>
  )
}

export default BgGlow
