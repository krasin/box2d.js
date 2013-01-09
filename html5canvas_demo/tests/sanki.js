var embox2dTest_sanki = function() {
}

embox2dTest_sanki.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,8), true);
}

embox2dTest_sanki.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, 0.0), new b2Vec2(40.0, 0.0));
    
    var ground = world.CreateBody(new b2BodyDef());
    ground.CreateFixture(shape, 0.0);

    shape = new b2PolygonShape();
    shape.SetAsBox(7.0, 0.25, new b2Vec2(1.0, 1.9), 0.3);
    ground.CreateFixture(shape, 0.0);

    var sankiShape = new b2PolygonShape();
    sankiShape.SetAsBox(1, 0.5, new b2Vec2(0, 0), 0.3);
    var sankiFixDef = new b2FixtureDef();
    sankiFixDef.set_shape(sankiShape);
    sankiFixDef.set_density(1.0);

    // This might be set to zero
    sankiFixDef.set_friction(0.1);

    var bd = new b2BodyDef();
    bd.set_type(b2_dynamicBody);
    bd.set_position(new b2Vec2(6, 4.23));
    var body = world.CreateBody(bd);    
    body.CreateFixture(sankiFixDef);
}

embox2dTest_sanki.prototype.step = function() {
    //this function will be called at the beginning of every time step
}

