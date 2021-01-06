class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder", "Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.title2 = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.title2.hide()
    }
    display() {
        this.title.html("Hey Captain,");
        this.title.position(width/3, 40);
        this.title.style('font-size', '75px');
        this.title.style('color', 'skyblue');
        this.title2.html("Now You have to save your" + "  planet")
        this.title2.position(width/6,150);
        this.title2.style('font-size', '50px');
        this.title2.style('color', 'skyblue');
        this.input.position(450,350);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(450,450);
        this.button.style('width', '210px');
        this.button.style('height', '40px');
        this.button.style('background', 'grey');
        this.reset.position(10, 15);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'grey');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/3,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}