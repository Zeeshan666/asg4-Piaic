var  n = 687; 
   console.write(getSum(n)); 

getSum(n) 
    {  
        var sum = 0; 
          
        while (n != 0) 
        { 
            sum = sum + n % 10; 
            n = n/10; 
        } 
      
    return sum; 
    } 



