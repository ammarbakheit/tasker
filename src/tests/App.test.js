import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "../Reducers/index";
import { createStore } from "redux";
import AddTask from "../Components/AddTask";
import tasks from "../Reducers/tasks";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

test("render add task button", async () => {
  render(
    <Provider store={store}>
     <Router>
     <AddTask />
    </Router>,
    </Provider>
  );
    const titleInput = screen.getByTestId("title");
    const descInput = screen.getByTestId("desc");
    const statusInput = screen.getByTestId("status");
    const btn =  screen.getByRole("button", {name: "Submit"});
   
    fireEvent.change(titleInput, {target: {value: "testing jest"}});
    fireEvent.change(descInput, {target: {value: "testing jest description to the process"}});
    fireEvent.change(statusInput, {target: {value: "1"}});

    fireEvent.click(btn);

});
