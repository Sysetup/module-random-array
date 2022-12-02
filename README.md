# Module Random array.

----

```console
   ____             __             
  / __/_ _____ ___ / /___ _____ _/|
 _\ \/ // (_-</ -_) __/ // / _ > _<
/___/\_, /___/\__/\__/\_,_/ .__//  
    /___/                /_/       
> Systems development company.
```

----


This script shuffles the elements of an array.


## Instructions:

```javascript
let arr = [1,3,4,7]
randomArray(arr)
console.log(arr)
```

## Examples:

### Front-end:

1. Inside the html file:

```htm
<script type="module" src="index.js"></script>
<script type="module" src="main.js"></script>
```

2. Inside the main.js file:

```javascript
let arr = [1,3,4,7]
let i = 0
randomArray(arr)
while (i < arr.lenght) {
    console.log(arr[i])
    i++
}
```