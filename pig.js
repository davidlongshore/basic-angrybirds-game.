class Pig
{
    constructor(x,y)
    {
        var options=
        {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        }
        this.bodie=Bodies.rectangle(x, y, 50, 50, options);
        this.width=50
        this.height=50
        World.add(world, this.bodie);
    }
    display()
    {
    var pos =this.bodie.position;
    var angle=this.bodie.angle;
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
    }
}