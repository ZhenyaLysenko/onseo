# onseo
Importing CSS

What you need to do is import the CSS file in your React component. For example, say you have a Search component and this is your tree directory:


You will need to import your CSS file in your Search component like so:

```
import style from "./Search.css"
```

You can then apply different CSS class styles such as:

```
const Search = () => {
  return <div className={style.nameOfYourCSSClass}>
           Hello Search Component :)
         </div>
}
```

You don’t have to call it style but what I found is that most people have given it this name in their projects.
