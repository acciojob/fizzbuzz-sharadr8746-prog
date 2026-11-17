//your JS code here. If required.
preventDefault();
let a;
for(let i=1;i<=20;i++){
	if(i%5==0 && i%3==0) a="FizzBuzz";
	if(i%3==0)  a="Fizz";
	if(i%5==0) a="Buzz";
	else a=i;
	alert(a);
}