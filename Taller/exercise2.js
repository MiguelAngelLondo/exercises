function greeting(namePerson) {
    if (!/^[a-zA-Z]+$/.test(namePerson) || namePerson.length < 2 || namePerson.charAt(0) !== namePerson.charAt(0).toUpperCase()) {
        return "Invalid name! Please try with another name. Remember that you need to enter a valid name.";
    }
    return "Hello, " + namePerson +"! "+ "Welcome to my program";
}

console.log(greeting("Edwin"));