
var embox2dTest_bowl_form = function() {
    //constructor
    this.stepCount = 0;
    this.pauseUntilStep = -1;
}

embox2dTest_bowl_form.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 38;
    setViewCenterWorld(new b2Vec2(-5,0), true);
}

embox2dTest_bowl_form.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created

    // ground
    var ground = world.CreateBody(new b2BodyDef());    
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, -6.0), new b2Vec2(40.0, -6.0));
    ground.CreateFixture(shape, 0.0);

    // left fixed plate
    ground.CreateFixture(createPolygonShape([new b2Vec2(-14, -4), new b2Vec2(-13, -4), new b2Vec2(-13, 14), new b2Vec2(-14, 14)]), 0);

    // left fixed support
    ground.CreateFixture(createPolygonShape([new b2Vec2(-13, 5.8), new b2Vec2(-13, 4.2), new b2Vec2(-9, 4.2), new b2Vec2(-9, 5.8)]), 0);

    // right fixed plate (fixed clamping plate)
    ground.CreateFixture(createPolygonShape([new b2Vec2(10, -4), new b2Vec2(13, -4), new b2Vec2(13, 3.7), new b2Vec2(10, 3.7)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(10, 6.3), new b2Vec2(13, 6.3), new b2Vec2(13, 14), new b2Vec2(10, 14)]), 0);

    // sprue bushing
    ground.CreateFixture(createPolygonShape([new b2Vec2(9, 3.7), new b2Vec2(13, 3.7), new b2Vec2(13, 4), new b2Vec2(9, 4)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(9, 6), new b2Vec2(13, 6), new b2Vec2(13, 6.3), new b2Vec2(9, 6.3)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(8, 4), new b2Vec2(13, 4), new b2Vec2(13, 4.85), new b2Vec2(7.2, 4.85),
					     new b2Vec2(7.31, 4.4), new b2Vec2(7.43, 4.23), new b2Vec2(7.6, 4.11)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(7.2, 5.15), new b2Vec2(13, 5.15), new b2Vec2(13, 6), new b2Vec2(8, 6),
					     new b2Vec2(7.6, 5.89), new b2Vec2(7.43, 5.77), new b2Vec2(7.31, 5.6)]), 0);

    // Insert
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 4), new b2Vec2(7.2, 4), new b2Vec2(7.2, 4.85), new b2Vec2(6, 4.75)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 5.25), new b2Vec2(7.2, 5.15), new b2Vec2(7.2, 6), new b2Vec2(6, 6)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 3), new b2Vec2(10, 3), new b2Vec2(10, 3.5),
					     new b2Vec2(7.2, 4), new b2Vec2(6, 4)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 6), new b2Vec2(7.2, 6), new b2Vec2(10, 6.5),
					     new b2Vec2(10, 7), new b2Vec2(6, 7)]), 0);

    // Fixed cavity plate
    ground.CreateFixture(createPolygonShape([new b2Vec2(7.0002, 7), new b2Vec2(10, 7), new b2Vec2(10, 13), new b2Vec2(7, 13)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(7.0002, -3), new b2Vec2(10, -3), new b2Vec2(10, 3), new b2Vec2(7, 3)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0002, 7), new b2Vec2(7, 7), new b2Vec2(7, 9.5), new b2Vec2(6, 9.5)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0002, 0.5), new b2Vec2(7, 0.5), new b2Vec2(7, 3), new b2Vec2(6, 3)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(3.0002, 11.05), new b2Vec2(7, 11.05), new b2Vec2(7, 13), new b2Vec2(3, 13)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(3.0002, -3), new b2Vec2(7, -3), new b2Vec2(7, -1.05), new b2Vec2(3, -1.05)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(3.0002, 9.5), new b2Vec2(7, 9.5), new b2Vec2(7, 9.95), new b2Vec2(3, 9.95)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(3.0002, 0.05), new b2Vec2(7, 0.05), new b2Vec2(7, 0.5), new b2Vec2(3, 0.5)]), 0);    


    // 2 quarter ellipse parts of fixed cavity plate
    var left = 3;
    var ax = 3;
    var ay = 2;
    var n = 20;
    var yf = function(x) {
	var val = 1 - x*x / ax / ax;
	console.log("x=", x, "val=", val);
	return ay*Math.sqrt(val);
    }
    for (var i = 0; i < n; i++) {
	var xc = (i / n) * ax;
	var yc = yf(xc);
	var xn = ((i+1) / n) * ax;
	var yn = yf(xn);
	ground.CreateFixture(createPolygonShape([new b2Vec2(left+xc+0.0002, 7+yc), new b2Vec2(left+xn, 7+yn),
						 new b2Vec2(left+xn, 9.5), new b2Vec2(left+xc, 9.5)]), 0);    
	ground.CreateFixture(createPolygonShape([new b2Vec2(left+xc+0.0002, 0.5), new b2Vec2(left+xn, 0.5),
						 new b2Vec2(left+xn, 3-yn), new b2Vec2(left+xc, 3-yc)]), 0);    
    }

    // movable clamping plate
    var bd = new b2BodyDef();
    bd.set_type(b2_kinematicBody);
    bd.set_position(new b2Vec2(-4, 5));
    this.plate = world.CreateBody(bd);

    this.plate.CreateFixture(createPolygonShape([new b2Vec2(-1, 1), new b2Vec2(0, 1), new b2Vec2(0, 9), new b2Vec2(-1, 9)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(-1, -9), new b2Vec2(0, -9), new b2Vec2(0, -1), new b2Vec2(-1, -1)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(0, 1), new b2Vec2(1, 1), new b2Vec2(1, 8), new b2Vec2(0, 8)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(0, -8), new b2Vec2(1, -8), new b2Vec2(1, -1), new b2Vec2(0, -1)]), 0);


    // movable cavity plate
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, -0.98), new b2Vec2(9.7, -0.98), new b2Vec2(9.7, 0.98), new b2Vec2(6, 0.98)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, 1.53), new b2Vec2(9.7, 1.53), new b2Vec2(9.7, 1.9), new b2Vec2(6, 1.9)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, -1.9), new b2Vec2(9.7, -1.9), new b2Vec2(9.7, -1.53), new b2Vec2(6, -1.53)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, 1.9), new b2Vec2(7, 1.9), new b2Vec2(7, 4.97), new b2Vec2(6, 4.97)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, -4.97), new b2Vec2(7, -4.97), new b2Vec2(7, -1.9), new b2Vec2(6, -1.9)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, 6.03), new b2Vec2(7, 6.03), new b2Vec2(7, 8), new b2Vec2(6, 8)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(6, -8), new b2Vec2(7, -8), new b2Vec2(7, -6.03), new b2Vec2(6, -6.03)]), 0);

    // movable cavity plate quarter ellipses
    ax = 2.7;
    ay = 1.7;
    left = 7
    for (var i = 0; i < n; i++) {
	var xc = (i / n) * ax;
	var yc = yf(xc);
	var xn = ((i+1) / n) * ax;
	var yn = yf(xn);
	console.log(xc,yc,xn,yn);
	this.plate.CreateFixture(createPolygonShape([new b2Vec2(left+xc, 1.9), new b2Vec2(left+xn, 1.9),
						     new b2Vec2(left+xn, 1.9+yn+0.001), new b2Vec2(left+xc, 1.9+yc)]), 0);
	this.plate.CreateFixture(createPolygonShape([new b2Vec2(left+xc, -1.9-yc-0.001), new b2Vec2(left+xn, -1.9-yn-0.001),
						     new b2Vec2(left+xn, -1.9), new b2Vec2(left+xc, -1.9)]), 0);
    }

    // leader pin
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(1, 7), new b2Vec2(6, 7), new b2Vec2(6, 8), new b2Vec2(1, 8)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(1, -8), new b2Vec2(6, -8), new b2Vec2(6, -7), new b2Vec2(1, -7)]), 0);

    // ejector plate and ejector retainer plate
    var ebd = new b2BodyDef();
    ebd.set_type(b2_dynamicBody);
    ebd.set_position(new b2Vec2(0, 5));
    var eject = world.CreateBody(ebd);

    var ejectShape = createPolygonShape([new b2Vec2(-2, -6.99), new b2Vec2(0, -6.99), new b2Vec2(0, 6.99), new b2Vec2(-2, 6.99)]);
    var ejectFixDef = new b2FixtureDef();
    ejectFixDef.set_shape(ejectShape);
    ejectFixDef.set_density(10.0);
    ejectFixDef.set_friction(10);
    eject.CreateFixture(ejectFixDef);

    // Return pins
    eject.CreateFixture(createPolygonShape([new b2Vec2(0, 5), new b2Vec2(7, 5), new b2Vec2(7, 6), new b2Vec2(0, 6)]), 0);
    eject.CreateFixture(createPolygonShape([new b2Vec2(0, -6), new b2Vec2(7, -6), new b2Vec2(7, -5), new b2Vec2(0, -5)]), 0);

    // Ejector pins
    eject.CreateFixture(createPolygonShape([new b2Vec2(0, 1), new b2Vec2(5.7, 1), new b2Vec2(5.7, 1.5), new b2Vec2(0, 1.5)]), 0);
    eject.CreateFixture(createPolygonShape([new b2Vec2(0, -1.5), new b2Vec2(5.7, -1.5), new b2Vec2(5.7, -1), new b2Vec2(0, -1)]), 0);
}

embox2dTest_bowl_form.prototype.step = function() {
    //this function will be called at the beginning of every time step
    var x = this.plate.GetPosition().get_x();
    if (x <= -11.9) {
	this.plate.SetLinearVelocity(new b2Vec2(2, 0));
    }
    if (x >= -4 && this.plate.GetLinearVelocity().get_x() >= -0.01 && this.pauseUntilStep < this.stepCount) {	
	this.plate.SetLinearVelocity(new b2Vec2(0, 0));
	this.pauseUntilStep = this.stepCount + 120;
    }
    console.log(this.pauseUntilStep, this.stepCount);
    if (this.pauseUntilStep == this.stepCount) {
	this.plate.SetLinearVelocity(new b2Vec2(-2, 0));
    }
    this.stepCount++;
}

