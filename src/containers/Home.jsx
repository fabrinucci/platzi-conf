import { Products } from "../components";
import initialState from "../data/initialState";

export const Home = () => {
  return (
    <>
      <Products products={ initialState.products }/>
    </>
  )
}