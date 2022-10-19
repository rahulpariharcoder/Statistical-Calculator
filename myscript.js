function calculate() {
    // Taking user input as array & by ID selector (numbers)
    let arrayValues = document.getElementById('numbers').value;
    
    //Splitting Values 
    let splittedValues = arrayValues.split(',');
    var total = 0;

    //Sorting Array
    let sortedArray = splittedValues.sort(function(a, b){return a - b});
    var length = sortedArray.length;

    // Minimum Term of the sequence
    document.getElementById("min").innerHTML = sortedArray[0];

    // Maximum Term of the sequence
    document.getElementById("max").innerHTML = sortedArray[sortedArray.length-1];

    //Calculation of Mean
    sortedArray.forEach(function(item) {
        total += parseInt(item);  //parseint for type conversion string to int
    });
    document.getElementById("mean").innerHTML = total/length;
    let mean = total/length;

  //  calculation of median
    if (length % 2 == 1) {
  
        // If length is odd
        document.getElementById("median").innerHTML = sortedArray[(length / 2) - .5];
  
    }
    else {
        // If length is even
        document.getElementById("median").innerHTML = ((parseInt(sortedArray[length / 2]) + parseInt(sortedArray[(length / 2) - 1])) / 2);
    }

    // Calculation of standard deviation
       
      // Assigning (value - mean) ^ 2 to every array item
      sortedArray = sortedArray.map((k)=>{
        return (k - mean) ** 2
      })
       
      // Calculating the sum of updated array
     let sum = sortedArray.reduce((acc, curr)=> acc + curr, 0);
      
     // Returning the Standard deviation
     document.getElementById("standard-deviation").innerHTML = Math.sqrt(sum / length);

}
