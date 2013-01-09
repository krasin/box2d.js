var embox2dTest_garmon = function() {
}

embox2dTest_garmon.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,8), true);
}

embox2dTest_garmon.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, 0.0), new b2Vec2(40.0, 0.0));
    
    var ground = world.CreateBody(new b2BodyDef());
    ground.CreateFixture(shape, 0.0);

    shape = new b2PolygonShape();
    shape.SetAsBox(1, 1.5, new b2Vec2(-3, 1.5), 0);
    ground.CreateFixture(shape, 0.0);

    var garmonShape = new b2PolygonShape();
    garmonShape.SetAsBox(1, 1.5, new b2Vec2(0, 0), 0);
    var garmonFixDef = new b2FixtureDef();
    garmonFixDef.set_shape(garmonShape);
    garmonFixDef.set_density(1.0);

    // This might be set to zero
    garmonFixDef.set_friction(0.1);

    var bd = new b2BodyDef();
    bd.set_type(b2_dynamicBody);
    bd.set_position(new b2Vec2(3, 1.5));
    var body = world.CreateBody(bd);    
    body.CreateFixture(garmonFixDef);
}

embox2dTest_garmon.prototype.step = function() {
    //this function will be called at the beginning of every time step
}

