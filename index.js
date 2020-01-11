let numbers = [];
let ifActionPress = 0;
let result = 0;

	function selectNumb(number) {
        let numb = document.getElementById('result').value;
        
		if(numb > 0) {
            if(ifActionPress == 1) {
                document.getElementById('result').value = number;
            } else {
                document.getElementById('result').value += number;
            }
		} else {
			document.getElementById('result').value = number;	
        }
        ifActionPress = 0;
	};

	function actionOnNumber(action) {
        let number = document.getElementById('label').value;
        let number2;
        let actionSign = action;
        
        if (number != 0) {
            actionSign = number.split(' ');
            console.log(actionSign);
            actionSign = actionSign[actionSign.length-2];
        }

        switch(actionSign) {
           case '+':
                if (number == 0) {
                    number2 = document.getElementById('result').value;
                    result = Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number2 + ' + ';
                } else {
                    number2 = document.getElementById('result').value
                    result = Number(result) + Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number + number2 + ' ' + action + ' ';
                }
                ifActionPress = 1;
                break;
            case '-':
                if (number == 0) {
                    number2 = document.getElementById('result').value;
                    result = Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number2 + ' - ';
                } else {
                    number2 = document.getElementById('result').value
                    result = Number(result) - Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number + number2 + ' ' + action + ' ';
                }
                ifActionPress = 1;
                break;
            case '*':
                if (number == 0) {
                    number2 = document.getElementById('result').value;
                    result = Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number2 + ' * ';
                } else {
                    number2 = document.getElementById('result').value
                    result = Number(result) * Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number + number2 + ' ' + action + ' ';
                }
                ifActionPress = 1;
                break;
            case '/':
                if (number == 0) {
                    number2 = document.getElementById('result').value;
                    result = Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number2 + ' / ';
                } else {
                    number2 = document.getElementById('result').value
                    result = Number(result) / Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number + number2 + ' ' + action + ' ';
                }
                ifActionPress = 1;
                break;
            case '=':
                if (number == 0) {
                    number2 = document.getElementById('result').value;
                    document.getElementById('result').value = number2;
                } else {
                    number2 = document.getElementById('result').value
                    result = Number(result) + actionSign[actionSign.length-2] + Number(number2);
                    document.getElementById('result').value = result;
                    document.getElementById('label').value = number + number2;
                }
                ifActionPress = 1;
                break;    
       }
	};

	function clearInput(clearIcon) {
        switch(clearIcon) {
            case 'c':
                document.getElementById('result').value = 0;
                document.getElementById('label').value = '';
                result = 0;
                break;
            case 'ce':
                document.getElementById('result').value = 0;
        }
		
	};

	function deleteOneNumber() {
		var number = document.getElementById('result').value;
		numberLength = number.length;
		
		if(numberLength <= 1) {
			document.getElementById('result').value = 0;
		} else {
			document.getElementById('result').value = number.substr(0, numberLength-1);
		}
	};