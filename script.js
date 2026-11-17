//your JS code here. If required.
preventDefault();
for(let i=1;i<=20;i++){
	if(i%5==0 && i%3==0) alert("FizzBuzz");
	if(i%3==0)  alert("Fizz");
	if(i%5==0) alert("Buzz");
	else alert(i);
}