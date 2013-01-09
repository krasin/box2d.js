
var embox2dTest_grad = function() {
    this.stepCount = 0;
    //constructor
}

embox2dTest_grad.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,8), true);
}

embox2dTest_grad.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, 0.0), new b2Vec2(40.0, 0.0));
    
    var ground = world.CreateBody(new b2BodyDef());
    var groundFixDef = new b2FixtureDef();
    groundFixDef.set_shape(shape);
    groundFixDef.set_restitution(0.4);
    ground.CreateFixture(groundFixDef);

//    console.log(this);
}

embox2dTest_grad.prototype.step = function() {
    if (this.stepCount % 20 == 0) {
	var gradShape = new b2CircleShape();
	gradShape.set_m_radius(0.25);

        var bd = new b2BodyDef();
        bd.set_type(b2_dynamicBody);
        bd.set_position(new b2Vec2((Math.random()-0.5)*10, 20));
        var gradBody = world.CreateBody(bd);
	gradBody.CreateFixture(gradShape, 0.0);
    }
    this.stepCount++;
    //this function will be called at the beginning of every time step
}

