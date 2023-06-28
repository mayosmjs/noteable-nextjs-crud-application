import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                 The Muse Box
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                   Creative Inspiration
                </span>
            </h1>

            <p className="text-center desc">
            Discover & share your inner creativity 
            </p>

         {/* feeds */}
         <Feed/>
    
    </section>
  )
}

export default Home