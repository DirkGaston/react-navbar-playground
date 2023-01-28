import { useContext } from "react";
import Context from "../context/Context";

function Home() {
  const { navbarOptions, setNavbarOptions, navbarStyles, setNavbarStyles } =
    useContext(Context);

  const handleOptionSubmit = (event) => {
    event.preventDefault();
    setNavbarOptions([
      ...navbarOptions,
      { title: event.target.title.value, route: event.target.route.value },
    ]);
  };

  const handleStylesChange = (event) => {
    setNavbarStyles({
      ...navbarStyles,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <form onSubmit={handleOptionSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Route:
          <input type="text" name="route" />
        </label>
        <button type="submit">Add</button>
      </form>
      <form>
        <label>
          Background:
          <input
            type="text"
            placeholder="Background color"
            onChange={(e) =>
              setNavbarStyles({ ...navbarStyles, background: e.target.value })
            }
          />
        </label>
        <label>
          Text:
          <input
            type="text"
            placeholder="Text color"
            onChange={(e) =>
              setNavbarStyles({ ...navbarStyles, text: e.target.value })
            }
          />
        </label>
      </form>
    </div>
  );
}

export default Home;
