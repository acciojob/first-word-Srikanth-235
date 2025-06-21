function firstWord(s) {
  // your code here
	let index=0;
  let res=" ";
	while(s[index]!=' '){
		res+=s[index];
		index++;
	}
	return res;
}

// Do not change the code below

//const s = prompt("Enter String:");
//alert(firstWord(s));
