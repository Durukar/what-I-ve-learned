# Clousures no React

```
function Comment(){
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes(likes + 1);
}
}

Comment(props, 1)
```
