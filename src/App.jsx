import { useEffect, useState } from "react";
import { useRoutes, useParams } from "react-router-dom";
import supabase from "./client";

// Import pages
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import Home from "./pages/Home";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data: creatorsData, error } = await supabase
        .from("Creators")
        .select();
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(creatorsData);
      }
    };

    fetchCreators();
  }, []);

  const EditCreatorWrapper = () => {
    const { id } = useParams();
    const creator = creators.find((c) => c.id === parseInt(id));

    return (
      <EditCreator
        creator={creator}
        onUpdateCreator={(id, updatedData) => {
          setCreators((prev) =>
            prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
          );
        }}
      />
    );
  };

  const routes = useRoutes([
    { path: "/", element: <Home creators={creators} /> },
    { path: "/creators", element: <ShowCreators creators={creators} /> },
    { path: "/creator/:id", element: <ViewCreator creators={creators} /> },
    { path: "/creator/edit/:id", element: <EditCreatorWrapper /> },
    { path: "/new", element: <AddCreator setCreators={setCreators} /> },
  ]);

  return <div className="bg-black">{routes}</div>;
}

export default App;
