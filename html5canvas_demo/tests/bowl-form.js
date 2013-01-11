
var embox2dTest_bowl_form = function() {
    //constructor
}

embox2dTest_bowl_form.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,3), true);
}

embox2dTest_bowl_form.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created

    // ground
    var ground = world.CreateBody(new b2BodyDef());    
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, -6.0), new b2Vec2(40.0, -6.0));
    ground.CreateFixture(shape, 0.0);

    // left fixed plate
    ground.CreateFixture(createPolygonShape([new b2Vec2(-13, -4), new b2Vec2(-10, -4), new b2Vec2(-10, 12), new b2Vec2(-13, 12)]), 0);

    // left fixed support
    ground.CreateFixture(createPolygonShape([new b2Vec2(-10, 5.5), new b2Vec2(-10, 4.5), new b2Vec2(-3, 4.5), new b2Vec2(-3, 5.5)]), 0);

    // right fixed plate (fixed clamping plate)
    ground.CreateFixture(createPolygonShape([new b2Vec2(10, -4), new b2Vec2(13, -4), new b2Vec2(13, 2), new b2Vec2(10, 2)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(10, 8), new b2Vec2(13, 8), new b2Vec2(13, 12), new b2Vec2(10, 12)]), 0);

    // sprue bushing
    ground.CreateFixture(createPolygonShape([new b2Vec2(9, 2), new b2Vec2(13, 2), new b2Vec2(13, 4), new b2Vec2(9, 4)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(9, 6), new b2Vec2(13, 6), new b2Vec2(13, 8), new b2Vec2(9, 8)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(8, 4), new b2Vec2(13, 4), new b2Vec2(13, 4.85), new b2Vec2(7.2, 4.85),
					     new b2Vec2(7.31, 4.4), new b2Vec2(7.43, 4.23), new b2Vec2(7.6, 4.11)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(7.2, 5.15), new b2Vec2(13, 5.15), new b2Vec2(13, 6), new b2Vec2(8, 6),
					     new b2Vec2(7.6, 5.89), new b2Vec2(7.43, 5.77), new b2Vec2(7.31, 5.6)]), 0);

    // Insert
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 4), new b2Vec2(7.2, 4), new b2Vec2(7.2, 4.85), new b2Vec2(6, 4.75)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 5.25), new b2Vec2(7.2, 5.15), new b2Vec2(7.2, 6), new b2Vec2(6, 6)]), 0);
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 3), new b2Vec2(9, 3), new b2Vec2(9, 3.5), new b2Vec2(7.2, 4), new b2Vec2(6, 4)]), 0);    
    ground.CreateFixture(createPolygonShape([new b2Vec2(6.0001, 6), new b2Vec2(7.2, 6), new b2Vec2(9, 6.5), new b2Vec2(9, 7), new b2Vec2(6, 7)]), 0);

    // movable clamping plate
    var bd = new b2BodyDef();
    bd.set_type(b2_kinematicBody);
    bd.set_position(new b2Vec2(-6, 5));
    this.plate = world.CreateBody(bd);

    this.plate.CreateFixture(createPolygonShape([new b2Vec2(-1, 1), new b2Vec2(0, 1), new b2Vec2(0, 7), new b2Vec2(-1, 7)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(-1, -7), new b2Vec2(0, -7), new b2Vec2(0, -1), new b2Vec2(-1, -1)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(0, 1), new b2Vec2(1, 1), new b2Vec2(1, 5.5), new b2Vec2(0, 5.5)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(0, -5.5), new b2Vec2(1, -5.5), new b2Vec2(1, -1), new b2Vec2(0, -1)]), 0);

    // leader pin
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(1, 4), new b2Vec2(5, 4), new b2Vec2(5, 5), new b2Vec2(1, 5)]), 0);
    this.plate.CreateFixture(createPolygonShape([new b2Vec2(1, -5), new b2Vec2(5, -5), new b2Vec2(5, -4), new b2Vec2(1, -4)]), 0);
    
}

embox2dTest_bowl_form.prototype.step = function() {
    //this function will be called at the beginning of every time step
    var x = this.plate.GetPosition().get_x();
    if (x <= -6) {
	this.plate.SetLinearVelocity(new b2Vec2(2, 0));
    }
    if (x >= -2) {
	this.plate.SetLinearVelocity(new b2Vec2(-2, 0));
    }

}

