export default function Home() {
  return (
    <div className="text-foreground flex w-4xl flex-col">
      <div className="flex flex-row">
        <div className="w-6/12">
          <h1 className="text-4xl font-bold">Hoef Entertainment</h1>
          <h2 className="text-2xl font-bold">Animation and VFX</h2>
          <div className="mt-4 flex flex-col gap-4">
            <button className="bg-primary hover:bg-secondary w-56 cursor-pointer rounded-md px-6 py-2 transition-colors duration-150 hover:duration-300">
              Our services
            </button>
            <button className="border-secondary hover:bg-secondary w-56 cursor-pointer rounded-md border-2 px-6 py-2 transition-colors duration-150 hover:duration-300">
              Contact us
            </button>
          </div>
        </div>
        <div className="w-6/12 rounded-md bg-blue-600"></div>
      </div>
      <div className="mt-16">
        <div className="mx-auto w-full">
          <h1 className="text-center text-4xl">Our specialities</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(3).keys()].map((item, index) => (
            <div key={index} className="bg-foreground h-60 w-full text-background p-4 rounded-md">
              <h2 className="text-2xl font-bold">Title</h2>
              <p>Lorem ipsum deserunt consectetur exercitation magna exercitation do dolor anim velit proident, in in cillum sit est. Nisi consequat cillum incididunt, exercitation laborum irure enim laboris amet non enim id, dolor anim dolor.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
