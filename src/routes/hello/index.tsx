import AppCard from "./components/app-card";

const hello = ()=>{
  const values = [{  
    id: "values-adasd-1",
    title: "Banana",
    // title: "The HyperText Markup Language(HTML)",
    description: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser also is a cornerstone technology of the World Wide Web."
  }]
  return(<>
    <section className="cards">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {values.map((item)=>(
          <AppCard key={item.id} title={item.title} description={item.description}/>
        ))}
      </div>
    </section>
  </>)
}

export default hello;