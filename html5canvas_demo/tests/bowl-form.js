
var embox2dTest_bowl_form = function() {
    //constructor
}

embox2dTest_bowl_form.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,5), true);
}

embox2dTest_bowl_form.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created

    // ground
    var ground = world.CreateBody(new b2BodyDef());    
    var shape = createChainShape([new b2Vec2(-40.0, 0.0), new b2Vec2(-10, 0), new b2Vec2(-10, -4), new b2Vec2(10, -4),
				  new b2Vec2(10, 0), new b2Vec2(40.0, 0.0)], false);
    ground.CreateFixture(shape, 0.0);
}

embox2dTest_bowl_form.prototype.step = function() {
    //this function will be called at the beginning of every time step
}

