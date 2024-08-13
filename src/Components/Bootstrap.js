function Bootstrap(props){
    return(
       <>
       <div className="container text-center">
           <div className="row">
           {/* card */}
            {
             props.currArr.map((item)=>
             <div className="card" style={{ width: "18rem" }}>
           <img src={item.avatar_url} className="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">{item.login}</h5>
             <p className="card-text">
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
             </p>
             <a href="#" className="btn btn-primary">
               Go somewhere
             </a>
             </div>
           </div>)
            }
            </div>
            </div>
       </>
    )
   }
   export default Bootstrap;