const header = React.createElement("h1", { id: "header" }, "Hello React!");
const divContainer = React.createElement(
  "div",
  { className: "container" },
  React.createElement("h2", {}, "This is a container"),
  header
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divContainer);
