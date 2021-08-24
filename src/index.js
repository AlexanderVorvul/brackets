module.exports = function check(str, bracketsConfig) {

	function find(ch1, ch2, bracketsConfig){
		for (let k = 0; k < bracketsConfig.length; k++)
			if ((ch1 === bracketsConfig[k][0])
			&& (ch2 === bracketsConfig[k][1])){			
				return true;
			}		
		return false;
	}
	
  	for (let i = 0; i < str.length-1;){

	  	if (find(str[i], str[i+1], bracketsConfig)){
		 
			s1 = str.substring(0, i);
		
			s2 = str.substring(i+2, str.length);
		
			str = s1 + s2;
		  
			i--;
			if( i<0 ) i =0;
		 
	  	}	else i++;
	}

  return ! str;
}
