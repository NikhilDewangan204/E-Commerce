import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] =useState("");

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-[100vh]">
      {
        loading ? <div className="h-full flex items-center justify-center" ><Spinner /></div>  :
        posts.length > 0 ? 
        (<div>
            <div className=" flex items-center justify-center mt-12 mb-6 ">
              <input className="border-4 bg-red-100 border-red-300 w-1/2 px-3 py-3 rounded-md" placeholder="Search here..." type="text" onChange={(event) =>{setSearch(event.target.value)}} />
            </div>

            <div className="grid content-center justify-items-center xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {search && filteredPosts.length === 0 ? (
              <div className="flex justify-center items-center col-span-full">
                <p className="font-semibold">No match found !</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <Product key={post.id} post={post} />
              ))
            )}
        </div>
          </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
