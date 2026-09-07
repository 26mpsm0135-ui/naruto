game.splash("Naruto")
let Name = game.askForString("0")
game.splash("14")
let Age = game.askForNumber("0")
if (Age < 13) {
    game.splash("You are a child", Name)
} else {
    let _13 = 0
    if (Age >= _13 && Age < 20) {
        game.splash("You are a teenager", Name)
    } else {
        game.splash("You are an adult", Name)
    }
}
