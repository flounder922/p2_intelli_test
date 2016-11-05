function generate_first_examples()
{
    var num1 = Math.floor((Math.random() * 5) + 1);
    var num2 = Math.floor((Math.random() * 5) + 1);

    var ex1 = Math.pow(num1, num2);
    var ex2 = Math.pow(num2, num1);
    var ex3 = ex2 - ex1;

    var concat = num1.toString() + ", " + num2.toString() + " -> " +
                ex1.toString() + ex2.toString() + ex3.toString();
    return concat;
}

function generate_second_examples()
{
    var num1 = Math.floor((Math.random() * 10) + 1);
    var num2 = Math.floor((Math.random() * 10) + 1);

    var ex1 = num1 + num2;
    var ex2 = ex1 - num2;
    var ex3 = ex2 +  num2;

    var concat = num1.toString() + ", " + num2.toString() + " -> " +
                ex1.toString() + ex2.toString() + ex3.toString();
    return concat;
}

function generate_third_examples()
{
    var num1 = Math.floor((Math.random() * 10) + 1);
    var num2 = Math.floor((Math.random() * 10) + 1);

    var ex1 = num1 + num2;
    var ex2 = ex1 + num2;
    var ex3 = ex2 +  num2;

    var concat = num1.toString() + ", " + num2.toString() + " -> " +
                ex1.toString() + ex2.toString() + ex3.toString();
    return concat;
}
