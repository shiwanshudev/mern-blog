import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import ViewBlog from "./pages/ViewBlog";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import NavBar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={BlogList} />
        <Route path="/blog/create" exact component={CreateBlog} />
        <Route path="/blog/edit/:id" exact component={EditBlog} />
        <Route path="/blog/:id" exact component={ViewBlog} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
