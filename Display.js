class Display {
    constructor (displayOldValue,displayNewValue){
        this.displayNewValue = displayNewValue;
        this.displayOldValue = displayOldValue;
        this.calculator = new Calculator();
        this.newValue = '';
        this.oldValue = '';
        this.operatorType = undefined;
        this.signs= {
            add: '+',
            multiply: '*',
            substract: '-',
            split: '/'
        }
    }

    clear(){
        this.newValue = this.newValue.toString().slice(0,-1);
        this.printValues();
    }

    clearAll(){
        this.newValue = '';
        this.oldValue = '';
        this.operatorType = undefined;
        this.printValues();
    }

    addNumber(number){
        if (number === '.'&& this.newValue.includes('.')) 
            return; 

        this.newValue = this.newValue + number;
        this.printValues();
    }

    printValues(){
        this.displayNewValue.textContent = this.newValue;
        this.displayOldValue.textContent = `${this.oldValue} ${this.signs[this.operatorType]||''}`;
    }

    calculate(){
        const newValue = parseFloat(this.newValue);
        const oldValue = parseFloat(this.oldValue);

        if (isNaN(newValue) || isNaN(oldValue)) return;

        this.newValue = this.calculator[this.operatorType](oldValue,newValue);
    }

    calculated(typeOperator){
        this.operatorType !== 'equals' && this.calculate();
        this.operatorType = typeOperator;
        this.oldValue = this.newValue || this.oldValue;
        this.newValue = '';
        this.printValues();
    }
}