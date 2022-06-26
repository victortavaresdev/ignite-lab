import { gql, useQuery } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

const App = () => {
  const { data } = useQuery(GET_LESSONS_QUERY);

  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY,
  //     })
  //     .then((response) => console.log(response.data));
  // }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
