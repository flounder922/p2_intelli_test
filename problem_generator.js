function create_ex1()
{
    document.getElementById("example1").innerHTML = generate_first_examples();
    document.getElementById("example2").innerHTML = generate_first_examples();
    document.getElementById("example3").innerHTML = generate_first_examples();
    document.getElementById("example4").innerHTML = generate_first_examples();
    document.getElementById("example5").innerHTML = generate_first_examples();
    console.log("i am here");
}

function create_ex2()
{
    document.getElementById("example1").innerHTML = generate_second_examples();
    document.getElementById("example2").innerHTML = generate_second_examples();
    document.getElementById("example3").innerHTML = generate_second_examples();
    document.getElementById("example4").innerHTML = generate_second_examples();
    document.getElementById("example5").innerHTML = generate_second_examples();
    console.log("i am here");
}

function create_ex2()
{
    document.getElementById("example1").innerHTML = generate_third_examples();
    document.getElementById("example2").innerHTML = generate_third_examples();
    document.getElementById("example3").innerHTML = generate_third_examples();
    document.getElementById("example4").innerHTML = generate_third_examples();
    document.getElementById("example5").innerHTML = generate_third_examples();
    console.log("i am here");
}

function generate_first_examples()
{
    var num1 = Math.floor((Math.random() * 5) + 1);
    var num2 = Math.floor((Math.random() * 5) + 1);

    var ex1 = Math.pow(num1, num2);
    var ex2 = Math.pow(num2, num1);
    var ex3 = ex1 - ex2;

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
