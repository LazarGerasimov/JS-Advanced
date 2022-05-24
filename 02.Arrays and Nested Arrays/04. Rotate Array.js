function rotateArray(arr, rotations) {

    while (rotations > 0) {
        let rotatingElement = arr.pop();
        arr.unshift(rotatingElement);

      rotations--;
    }

  console.log(arr.join(" "))
  
}