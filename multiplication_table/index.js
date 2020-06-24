for (let i = 1; i <= 9; i++) {
	for(let j=1;j<=i;j++){
		let sum = i*j;
		if(j!=1){
			document.write(" ");
		}
		document.write(`${i}*${j}=${sum}`);
	}
	document.write("<br/>");
}